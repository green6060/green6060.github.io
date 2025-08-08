import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <button className="booking-button">DM for Booking</button>
        </div>
      </section>

      <section className="about-me">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Welcome to Seventh Heaven Tattoo. I'm a passionate tattoo artist
            dedicated to creating unique, meaningful artwork that tells your
            story. With years of experience and a love for both traditional and
            contemporary styles, I work closely with each client to bring their
            vision to life.
          </p>
          <p>
            My studio is a welcoming space where creativity meets
            professionalism. Whether you're looking for a small, delicate piece
            or a large, intricate design, I'm here to help you achieve the
            perfect tattoo that you'll love for years to come.
          </p>
          <div className="about-features">
            <div className="feature">
              <h3>Custom Designs</h3>
              <p>Every tattoo is uniquely designed for you</p>
            </div>
            <div className="feature">
              <h3>Clean Environment</h3>
              <p>Sterile equipment and professional standards</p>
            </div>
            <div className="feature">
              <h3>Expert Care</h3>
              <p>Comprehensive aftercare guidance provided</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
