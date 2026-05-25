import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We’ll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Header */}
      <header style={{ padding: "20px", backgroundColor: "#282c34", color: "white" }}>
        <h1>Contact Us</h1>
      </header>

      {/* Contact Info */}
      <section style={{ padding: "40px", textAlign: "center", backgroundColor: "#f4f4f4" }}>
        <h2>Get in Touch</h2>
        <p>Email: contact@mywebsite.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123 Business Street, Ahmedabad, India</p>
      </section>

      {/* Contact Form */}
      <section style={{ padding: "40px" }}>
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
          <div style={{ marginBottom: "15px" }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{ width: "100%", padding: "10px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px" }}>Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ padding: "20px", backgroundColor: "#282c34", color: "white", textAlign: "center" }}>
        <p>&copy; 2026 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
