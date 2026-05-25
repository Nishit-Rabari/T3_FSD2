import React from "react";

function Home() {
  return (
    <div>
      {/* Header */}
      <header style={{ padding: "20px", backgroundColor: "#282c34", color: "white" }}>
        <h1>My Website</h1>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
            <li><a href="#home" style={{ color: "white" }}>Home</a></li>
            <li><a href="#about" style={{ color: "white" }}>About</a></li>
            <li><a href="#services" style={{ color: "white" }}>Services</a></li>
            <li><a href="#contact" style={{ color: "white" }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" style={{ padding: "50px", textAlign: "center", backgroundColor: "#f4f4f4" }}>
        <h2>Welcome to My Website</h2>
        <p>This is a simple homepage built with React and JSX.</p>
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>Get Started</button>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "50px" }}>
        <h2>About Us</h2>
        <p>
          We are passionate about building modern web applications with React.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: "50px", backgroundColor: "#f9f9f9" }}>
        <h2>Our Services</h2>
        <ul>
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>SEO Optimization</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "50px" }}>
        <h2>Contact Us</h2>
        <p>Email: contact@mywebsite.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>

      {/* Footer */}
      <footer style={{ padding: "20px", backgroundColor: "#282c34", color: "white", textAlign: "center" }}>
        <p>&copy; 2026 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
