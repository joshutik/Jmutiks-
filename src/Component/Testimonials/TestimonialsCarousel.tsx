import { useEffect, useState } from "react";
import "./TestimonialsCarousel.css";

const testimonials = [
  {
    text: "I am extreamly happy with the result, it was well made you know i pay more attention to finishing and it was screaming Premuim",
    name: "Mrs. Amaria",
  },
  {
    text: "Fast delivery and excellent finishing.",
    name: "Client B",
  },
  {
    text: "Best tailoring experience I've had in Port Harcourt.",
    name: "Client C",
  },
];

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section alt testimonials">
      <h2>Customer Reviews</h2>

      <div className="testimonial-card">
        <p className="testimonial-text">"{testimonials[index].text}"</p>
        <span className="testimonial-name">— {testimonials[index].name}</span>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
