import React, { useState } from 'react';

// 1. THE PARENT COMPONENT (The Kitchen)
export default function App() {
  // The master count lives here in the parent.
  const [cartCount, setCartCount] = useState(0);

  // This is the function we will give to the child.
  const handleAddItem = () => {
    setCartCount(cartCount + 1); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* The Parent displays the count */}
      <h1>🛒 Navbar Total Items: {cartCount}</h1>
      <hr />
      
      {/* We pass the Walkie-Talkie function down as a prop named "onAdd" */}
      <ProductCard productName="Wireless Headphones" onAdd={handleAddItem} />
      <ProductCard productName="Smart Watch" onAdd={handleAddItem} />
    </div>
  );
}

// 2. THE CHILD COMPONENT (The Waiter)
function ProductCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{props.productName}</h3>
      
      {/* When clicked, the child runs the function it received from the parent */}
      <button onClick={props.onAdd}>
        Add to Cart
      </button>
    </div>
  );
}
