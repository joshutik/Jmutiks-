// import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Landing.css";

const Landing = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="landing-container">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">JM Utiks</h2>
        <a href="#order" className="nav-btn">Order Now</a>
      </nav>

      {/* Hero */}
      <section className="hero" data-aos="fade-up">
        <h1 data-aos="fade-down">Wearing Elegance as Excellence.</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Premium custom menswear tailored to fit your lifestyle — native,
          corporate, and casual.
        </p>
        <a data-aos="zoom-in" data-aos-delay="400"
          href="https://wa.me/2348037538171?text=Hello%20JM%20Utiks,%20I%20want%20to%20place%20an%20order"
          className="hero-btn"
        >
          Order on WhatsApp
        </a>
      </section>

      {/* Collections */}
      <section className="section">
        <h2>Our Collections</h2>
        <div className="grid">
          <div className="card" data-aos="zoom-in">Native Wear</div>
          <div className="card" data-aos="zoom-in">Corporate Suits</div>
          <div className="card" data-aos="zoom-in">Casual Outfits</div>
        </div>
      </section>

      {/* Why JM Utiks */}
      <section className="section alt">
        <h2>Why JM Utiks</h2>
        <ul className="list">
          <li>✔ Perfect Fit Guarantee</li>
          <li>✔ Premium Fabrics</li>
          <li>✔ Fast Delivery</li>
          <li>✔ Trusted Brand</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="section">
        <h2>How It Works</h2>
        <div className="grid">
          <div className="card">1. Choose Style</div>
          <div className="card">2. Send Measurements</div>
          <div className="card">3. We Sew & Deliver</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section alt">
        <h2>Customer Reviews</h2>
        <p>"Top quality and perfect fit. JM Utiks never disappoints."</p>
        <p>"Fast delivery and excellent finishing."</p>
      </section>

      {/* CTA */}
      <section id="order" className="cta">
        <h2>Ready to Upgrade Your Style?</h2>
        <p>Click below to place your order instantly.</p>
        <a
          href="https://wa.me/2348037538171?text=Hello%20JM%20Utiks,%20I%20want%20to%20place%20an%20order"
          className="cta-btn"
        >
          Order Now on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} JM Utiks. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Landing;
