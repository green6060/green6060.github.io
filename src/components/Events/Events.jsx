import "./Events.css";

function Events() {
  const events = [
    {
      id: 1,
      title: "Tattoo Convention 2024",
      date: "March 15-17, 2024",
      location: "Salt Lake City Convention Center",
      description:
        "Join us for the biggest tattoo convention of the year featuring artists from around the world.",
      image:
        "https://placehold.co/400x200/8B7355/FFFFFF?text=Tattoo+Convention",
    },
    {
      id: 2,
      title: "Flash Friday Special",
      date: "Every Friday",
      location: "Seventh Heaven Tattoo Studio",
      description:
        "Get a unique flash design every Friday with special pricing and limited availability.",
      image: "https://placehold.co/400x200/8B7355/FFFFFF?text=Flash+Friday",
    },
    {
      id: 3,
      title: "Artist Meet & Greet",
      date: "April 5, 2024",
      location: "Seventh Heaven Tattoo Studio",
      description:
        "Meet our artists, see their portfolios, and discuss your next tattoo project.",
      image: "https://placehold.co/400x200/8B7355/FFFFFF?text=Meet+%26+Greet",
    },
    {
      id: 4,
      title: "Tattoo Aftercare Workshop",
      date: "April 12, 2024",
      location: "Seventh Heaven Tattoo Studio",
      description:
        "Learn proper tattoo care techniques and get your questions answered by professionals.",
      image:
        "https://placehold.co/400x200/8B7355/FFFFFF?text=Aftercare+Workshop",
    },
    {
      id: 5,
      title: "Summer Tattoo Festival",
      date: "June 20-22, 2024",
      location: "Liberty Park",
      description:
        "Outdoor tattoo festival featuring live music, food trucks, and amazing artwork.",
      image: "https://placehold.co/400x200/8B7355/FFFFFF?text=Summer+Festival",
    },
    {
      id: 6,
      title: "Custom Design Consultation Day",
      date: "May 10, 2024",
      location: "Seventh Heaven Tattoo Studio",
      description:
        "Book a consultation to discuss your custom tattoo design with our experienced artists.",
      image:
        "https://placehold.co/400x200/8B7355/FFFFFF?text=Design+Consultation",
    },
  ];

  return (
    <section id="events" className="events">
      <div className="events-content">
        <h2>Upcoming Events</h2>
        <p className="events-subtitle">
          Join us for exciting tattoo events, workshops, and special occasions
        </p>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/400x200/8B7355/FFFFFF?text=Event+Image";
                  }}
                />
                <div className="event-date-badge">
                  <span className="event-date">{event.date}</span>
                </div>
              </div>

              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>

                <div className="event-actions">
                  <button className="event-details-btn">View Details</button>
                  <button className="event-book-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="events-cta">
          <p>Want to stay updated on all our events?</p>
          <a
            href="https://www.instagram.com/7th_heaven_tattoo?igsh=MXBuYXE2b2dzcDRmMQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="follow-instagram-btn"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Events;
