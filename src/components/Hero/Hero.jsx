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
          <a
            href="https://www.instagram.com/7th_heaven_tattoo?igsh=MXBuYXE2b2dzcDRmMQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="booking-button"
          >
            DM for Booking
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
