// src/App.tsx

import Product from "./Product";
import "../App.css";

function App() {
  return (
    <div className="cards">
      <h1>Products</h1>
      <div className="product-card">
        <Product
          name="Bread"
          image="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=320"
          descr="roll"
          price={40}
        />
      </div>
      <div className="product-card">
        <Product
          name="Fries and Burger"
          image="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=320"
          descr="roll"
          price={40}
        />
      </div>
    </div>
  );
}

export default App;
