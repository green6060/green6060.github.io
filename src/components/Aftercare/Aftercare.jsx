import { Link } from "react-router-dom";
import "./Aftercare.css";

function Aftercare() {
  return (
    <section className="aftercare-section">
      <div className="aftercare-container">
        <div className="back-link">
          <Link to="/" className="back-home-link">
            ← Back to Home
          </Link>
        </div>
        <div className="aftercare-header">
          <h1>Tattoo Aftercare Instructions</h1>
        </div>

        <div className="aftercare-content">
          <div className="aftercare-card">
            <h2>Immediate Care (First 24-48 Hours)</h2>
            <div className="care-step">
              <h3>1. Keep the Bandage On</h3>
              <p>
                Your tattoo artist will cover your new tattoo with a bandage or
                plastic wrap. Keep this covering on for the time specified by
                your artist (usually 2-4 hours).
              </p>
            </div>

            <div className="care-step">
              <h3>2. First Wash</h3>
              <p>
                After removing the bandage, gently wash your tattoo with
                lukewarm water and mild, fragrance-free soap. Use your clean
                hands, not a washcloth or sponge.
              </p>
            </div>

            <div className="care-step">
              <h3>3. Pat Dry</h3>
              <p>
                Gently pat your tattoo dry with a clean, soft towel. Do not rub
                or scrub the area.
              </p>
            </div>
          </div>

          <div className="aftercare-card">
            <h2>Healing Process (Days 2-14)</h2>
            <div className="care-step">
              <h3>4. Moisturize Regularly</h3>
              <p>
                Apply a thin layer of fragrance-free, alcohol-free moisturizer
                or healing ointment as recommended by your artist. Avoid
                petroleum-based products.
              </p>
            </div>

            <div className="care-step">
              <h3>5. Keep It Clean</h3>
              <p>
                Wash your tattoo 2-3 times daily with mild soap and water.
                Always wash your hands first.
              </p>
            </div>

            <div className="care-step">
              <h3>6. Avoid Sun Exposure</h3>
              <p>
                Keep your tattoo out of direct sunlight. Once healed, always
                apply sunscreen (SPF 30+) to protect your tattoo from fading.
              </p>
            </div>
          </div>

          <div className="aftercare-card">
            <h2>What to Avoid</h2>
            <div className="care-step">
              <h3>❌ Don't Do These Things</h3>
              <ul>
                <li>Scratch or pick at scabs</li>
                <li>Submerge in water (pools, hot tubs, baths)</li>
                <li>Wear tight clothing that may rub the tattoo</li>
                <li>
                  Apply makeup, lotions, or creams not recommended by your
                  artist
                </li>
                <li>Expose to direct sunlight or tanning beds</li>
                <li>Engage in activities that may cause excessive sweating</li>
              </ul>
            </div>
          </div>

          <div className="aftercare-card">
            <h2>Healing Timeline</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-day">Days 1-3</div>
                <div className="timeline-desc">
                  Tattoo may be red, swollen, and tender
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-day">Days 4-7</div>
                <div className="timeline-desc">
                  Scabbing begins, avoid picking
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-day">Days 8-14</div>
                <div className="timeline-desc">
                  Scabs fall off, tattoo may appear dull
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-day">Days 15-30</div>
                <div className="timeline-desc">
                  Tattoo regains vibrancy, healing continues
                </div>
              </div>
            </div>
          </div>

          <div className="aftercare-card">
            <h2>When to Contact Your Artist</h2>
            <div className="warning-section">
              <p>Contact your tattoo artist immediately if you experience:</p>
              <ul>
                <li>Excessive redness, swelling, or pain</li>
                <li>Pus or unusual discharge</li>
                <li>Fever or chills</li>
                <li>Severe itching or rash</li>
                <li>Any other concerning symptoms</li>
              </ul>
              <p className="contact-info">
                <strong>Contact:</strong> DM us on Instagram for immediate
                assistance
              </p>
            </div>
          </div>

          <div className="aftercare-card">
            <h2>Long-term Care</h2>
            <div className="care-step">
              <h3>Maintaining Your Tattoo</h3>
              <p>
                Even after your tattoo is fully healed, proper care will help
                maintain its vibrancy and detail for years to come. Always use
                sunscreen when outdoors, keep your skin moisturized, and avoid
                excessive sun exposure.
              </p>
            </div>
          </div>
        </div>

        <div className="aftercare-footer">
          <p>
            <strong>Remember:</strong> Every tattoo heals differently, and
            individual healing times may vary. When in doubt, always consult
            with your tattoo artist for personalized advice.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aftercare;
