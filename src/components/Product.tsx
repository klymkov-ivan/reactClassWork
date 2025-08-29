import Button from "./button/Button";

interface ProductProps {
  name: string;
  image: string;
  price: number;
  descr: string;
}

function Product({ name, image, price, descr }: ProductProps) {
  return (
    <div className="product-conatainer">
      <h2>{name}</h2>
      <img className="product-img" src={image} alt={descr} />
      <p>Price: {price} credits</p>
      <Button variant="secondary" text="Buy" />
      <Button variant="primary" text="Skip" />
    </div>
  );
}

export default Product;
