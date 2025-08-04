import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src="/images/styled_header.jpeg"
          alt="Seventh Heaven Tattoo Header"
          className="hero-image"
        />
        <button className="booking-button">DM for Booking</button>
      </div>
    </section>
  );
}

export default Hero;
