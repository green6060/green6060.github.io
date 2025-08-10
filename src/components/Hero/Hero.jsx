import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="button-container">
          <img
            src="/images/styled_artist_name_transparent_bkg.png"
            alt="Seventh Heaven Tattoo"
            className="artist-logo"
          />
          <button className="booking-button">DM for Booking</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
