import { Routes, Route, Link } from "react-router-dom";
import {
  Layout,
  Navbar,
  Hero,
  AboutMe,
  Reviews,
  Aftercare,
  Events,
} from "./components";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Reviews />
              <Events />
            </>
          }
        />
        <Route path="/aftercare" element={<Aftercare />} />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "100px 20px" }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
              <Link to="/" style={{ color: "#667eea", textDecoration: "none" }}>
                ← Back to Home
              </Link>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
