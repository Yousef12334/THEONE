
import React from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Puff XTRA Grape Ice', price: 6.75, stock: 122 },
  { id: 2, name: 'Elf Bar Strawberry', price: 8.5, stock: 0 },
  { id: 3, name: 'BIC Lighters', price: 0.89, stock: 942 }
];

function App() {
  return (
    <div className="App">
      <h1>CALI SUNRISE</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} ({product.stock} in stock)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
