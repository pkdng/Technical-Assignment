import { CardContainer, CardImage, CardBody, CardTitle, CardText, CardPrice , CardProductName } from './styles/Card';

import Button from './Button';

const Card = (props) => {
  const {product} = props;

  return (
    <CardContainer width="500px">
      <CardImage src={product.imageUrl} />
      <CardBody>
        <CardPrice>{product.price}</CardPrice>
        <CardProductName>{product.productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;
