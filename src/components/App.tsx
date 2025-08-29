// src/App.tsx

import Product from "./Product";
import Books from "./Books";
import "../App.css";
import "modern-normalize";

const bestOfTheWeek = [
  {
    id: 1,
    name: "1984",
  },
  {
    id: 2,
    name: "Master i Margarita",
    author: "Bulgakov",
  },
];

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
      <Books books={bestOfTheWeek} />
    </div>
  );
}

export default App;
