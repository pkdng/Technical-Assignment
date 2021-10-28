import { useEffect, useState } from "react";
import CardProduct from "./components/CardProduct";
import CartListItem from "./components/CartListItem";
import Navbar from "./components/Navbar";

import menus from "./dummy-data";

export default function App() {
  const [total, setTotal] = useState(0);
  const [purchasedItem, setPurchasedItem] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPurchasedItem(cart.reduce((prev, curr) => curr.amount + prev, 0));
    setTotal(cart.reduce((prev, curr) => curr.amount * curr.price + prev, 0));
  });

  const addToCart = (id) => {
    const menu = menus.find((i) => i.id === id);
    const cartById = cart.find((i) => i.id === id);
    if (!cartById) {
      setCart([
        ...cart,
        {
          id,
          name: menu.name,
          price: menu.price,
          amount: 1
        }
      ]);
    } else {
      increaseCartAmount(id);
    }
  };

  const decreaseCartAmount = (id) => {
    const indexOfCartById = cart.findIndex((i) => i.id === id);
    const newCart = cart.slice();
    newCart[indexOfCartById].amount = newCart[indexOfCartById].amount - 1;
    if (newCart[indexOfCartById].amount <= 0) {
      setCart(cart.filter((i) => i.id !== id));
    } else {
      setCart(newCart);
    }
  };

  const increaseCartAmount = (id) => {
    const indexOfCartById = cart.findIndex((i) => i.id === id);
    const newCart = cart.slice();
    newCart[indexOfCartById].amount = newCart[indexOfCartById].amount + 1;
    setCart(newCart);
  };

  return (
    <div className="bg-secondary">
      <Navbar totalItem={purchasedItem} />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card w-100">
              <div className="card-body">
                <div className="row">
                  {menus.map((menu) => (
                    <div
                      key={menu.id}
                      className="col-md-4 col-sm-6 col-12 my-2"
                    >
                      <CardProduct
                        {...menu}
                        addToCart={() => addToCart(menu.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <ol className="list-group">
              {cart.map((c) => {
                return (
                  <CartListItem
                    key={c.id}
                    {...c}
                    increase={() => increaseCartAmount(c.id)}
                    decrease={() => decreaseCartAmount(c.id)}
                  />
                );
              })}
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Total Harga</div>
                </div>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
                }).format(total)}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
