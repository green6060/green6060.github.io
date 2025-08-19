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
          {/* Duration Section */}
          <div className="aftercare-duration">
            <div className="duration-icon">⏰</div>
            <div className="duration-text">
              <h2>Duration of Care</h2>
              <p>
                You will want around <strong>7 days total</strong> of constant
                aftercare
              </p>
            </div>
          </div>

          {/* Second Skin Section */}
          <div className="aftercare-card second-skin-card">
            <div className="card-header">
              <div className="card-icon">🩹</div>
              <h2>Second Skin Instructions</h2>
            </div>
            <div className="card-content">
              <p className="card-intro">
                If you get Second Skin, keep it on for{" "}
                <strong>no longer than 5 days</strong>. Take it off early for
                one of these 4 reasons:
              </p>
              <div className="reasons-grid">
                <div className="reason-item">
                  <div className="reason-number">1</div>
                  <p>You are unable to stop picking at it</p>
                </div>
                <div className="reason-item">
                  <div className="reason-number">2</div>
                  <p>
                    You are leaking out of it. If stuff can get out, stuff can
                    get in
                  </p>
                </div>
                <div className="reason-item">
                  <div className="reason-number">3</div>
                  <p>
                    You experience a red reaction to the edges of the Second
                    Skin
                  </p>
                </div>
                <div className="reason-item">
                  <div className="reason-number">4</div>
                  <p>
                    You are sweating under it, such as when you work outdoors,
                    go to the gym, doing heavy labor, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 7 Steps Section */}
          <div className="aftercare-card steps-card">
            <div className="card-header">
              <div className="card-icon">📋</div>
              <h2>7 Steps of Care</h2>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Initial Cleaning</h3>
                  <p>
                    After the initial bandage is removed, gently wash the tattoo
                    with lukewarm water and a mild antibacterial soap. Pat it
                    dry with a clean paper towel.
                  </p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Applying Lotion</h3>
                  <p>
                    Apply a thin layer of fragrance-free lotion (like Lubriderm
                    or Cetaphil). Avoid over-applying, as it can suffocate the
                    skin and slow healing.
                  </p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Frequency</h3>
                  <p>Clean and moisturize the tattoo around 2 times a day.</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Avoid</h3>
                  <p>
                    Do not pick or scratch at the tattoo, as this can cause
                    scarring and ink loss. Avoid soaking the tattoo in water
                    (baths, pools, hot tubs) for the first few weeks.
                  </p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Healing Timeline</h3>
                  <p>
                    Expect the tattoo to peel and flake like a sunburn within a
                    few days. This is normal and the scabs will fall off on
                    their own. Make sure to keep it hydrated with a non-scented
                    lotion.
                  </p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>Monitor for Infection</h3>
                  <p>
                    If you experience excessive redness, swelling, pain, or pus,
                    consult your tattoo artist or a doctor, as it could be a
                    sign of infection.
                  </p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">7</div>
                <div className="step-content">
                  <h3>Sun Protection</h3>
                  <p>
                    Once healed, protect your tattoo from the sun with clothing
                    or sunscreen to prevent fading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aftercare;
