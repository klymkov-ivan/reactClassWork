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
      <button type="button">Buy</button>
    </div>
  );
}

export default Product;
