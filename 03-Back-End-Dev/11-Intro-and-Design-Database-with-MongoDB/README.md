1. Buatlah skema untuk kebutuhan data profile pengguna aplikasi Skiljek dan relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:
    - Full Name
    - Email
    - Phone Number  
      
    **one-to-one**  
    ```
    {
        "_id": "ObjectId('AAA')",
        "fullName": "Hihi Lala",
        "email": "hihi@gmail.com",
        "phoneNumber": "0808080808"
    }
    ```
2. Buatlah skema untuk kebutuhan data alamat pengguna SkilShop dimana alamat yang dapat didaftarkan maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:
    - Full Name
    - Phone Number
    - Address (Max 2)
      
    **one-to-few**  
    ```
    {
        "_id": "ObjectId('AAA')",
        "fullName": "Hihi Lala",
        "phoneNumber": "0808080808",
        "address": [{
                "street": "123 street", 
                "city": "ty city"
            },{
                "street": "43 street", 
                "city": "ci city"
            }
        ]
    }
    ```
3. Buatlah skema untuk kebutuhan data dari suatu Products yang akan mempunyai banyak varian dari aplikasi SkilShop. Jelasskan juga relasi apakah yang tepat untuk data tersebut?
      
    **one-to-many**   
    Products: 
    ```
    {
        "_id": "ObjectId('ABAB')",
        "productName": "Kaos Polos",
        "brandName": "SkilShirt",
        "variants": ["ObjectId('AAA')","ObjectId('BBB')"]
    }
    ```
    Variants:
    ```
    {
        "_id": "ObjectId('AAA')",
        "varianName": "Kaos Polos Hitam",
        "color": "Hitam",
        "quantity": "12",
        "price": "99000"  
    },
    {
        "_id": "ObjectId('BBB')",
        "varianName": "Kaos Polos Navy",
        "color": "Navy",
        "quantity": "10",
        "price": "99000"  
    }
    ```
4. Buatlah skema untuk kebutuhan data dari suatu aplikasi bioskop bernama SkilFlix. Data yang ingin ditampilkan adalah List Bioskop pada suatu Kota dan Film yang ditayangkan pada Setiap Bioskop tersebut. Jelaskan juga relasi apakah yang tepat untuk data tersebut?
      
    **many-to-many**   
    Cinemas: 
    ```
    {
        "_id": "ObjectId('CNM1')",
        "cinemaName": "CGF",
        "films": ["ObjectId('FILM1')","ObjectId('FILM2')"],
        "location": "Pondok Indah Mall"
    },
    {
        "_id": "ObjectId('CNM2')",
        "cinemaName": "Cinema31",
        "films": ["ObjectId('FILM1')","ObjectId('FILM2')"],
        "location": "Mall Kelapa Gading"
    }
    ```
    Films:
    ```
    {
        "_id": "ObjectId('FILM1')",
        "filmName": "Venom 2",
        "cinemas": ["ObjectId('CNM1')","ObjectId('CNM2')"]
    },
    {
        "_id": "ObjectId('FILM2')",
        "filmName": "Spiderman No Way Home",
        "cinemas": ["ObjectId('CNM1')","ObjectId('CNM2')"]
    }
    ```