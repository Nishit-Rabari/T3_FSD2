import React from "react";

function Shop() {
  const products = [
    { id: 1, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Headphones", price: "$199", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Smartphone", price: "$799", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Smartwatch", price: "$299", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      {/* Header */}
      <header style={{ padding: "20px", backgroundColor: "#282c34", color: "white" }}>
        <h1>My Shop</h1>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
            <li><a href="#shop" style={{ color: "white" }}>Shop</a></li>
            <li><a href="#categories" style={{ color: "white" }}>Categories</a></li>
            <li><a href="#cart" style={{ color: "white" }}>Cart</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="shop" style={{ padding: "40px", textAlign: "center", backgroundColor: "#f4f4f4" }}>
        <h2>Welcome to Our Shop</h2>
        <p>Find the best products at unbeatable prices.</p>
      </section>

      {/* Categories */}
      <section id="categories" style={{ padding: "40px" }}>
        <h2>Categories</h2>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Home & Kitchen</li>
          <li>Sports</li>
        </ul>
      </section>

      {/* Product Grid */}
      <section style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
        <h2>Products</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {products.map(product => (
            <div key={product.id} style={{ border: "1px solid #ddd", padding: "20px", textAlign: "center" }}>
              <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button style={{ padding: "10px 15px" }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "20px", backgroundColor: "#282c34", color: "white", textAlign: "center" }}>
        <p>&copy; 2026 My Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Shop;
