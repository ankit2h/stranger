import React, { useEffect } from "react";
import "./Setup.css";
import Header from "./components/Header";
import { setSidebar } from "./redux/sideSlice";
import { useDispatch } from "react-redux";

const Setup = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebar(false));
  }, [dispatch]);
  useEffect(() => {
    // Handle copy button functionality
    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      showToast("Copied to clipboard!");
    };

    // Toast notification
    const showToast = (message) => {
      const toast = document.getElementById("toast");
      if (toast) {
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3000);
      }
    };

    // Add click handlers to copy buttons
    document.querySelectorAll(".copy-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const textToCopy = button.getAttribute("data-copy");
        handleCopy(textToCopy);
      });
    });
  }, []);

  return (
    <>
      <main className="setup-page">
        <header className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>🎬 Netflix Clone – Full Setup Tutorial</h1>
            <p className="subtitle">
              Full-stack with <strong>Next.js</strong> +{" "}
              <strong>Redux Toolkit</strong> + <strong>Tailwind</strong> and{" "}
              <strong>Node.js</strong> + <strong>MongoDB</strong>
            </p>
            <div className="cta-row">
              <a
                className="btn primary"
                id="openStructure"
                href="https://netflix.learnest.tech/structure"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Project Structure
              </a>
            </div>
          </div>
        </header>

        <section className="container" id="content">
          <article className="card">
            <h2 id="prereqs">🔹 1. Prerequisites</h2>
            <ul className="bullets">
              <li>
                Node.js ({">="}18) —{" "}
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </li>
              <li>npm (comes with Node)</li>
              <li>MongoDB Atlas account (or local MongoDB)</li>
              <li>
                TMDB API Key —{" "}
                <a
                  href="https://www.themoviedb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get from TMDB
                </a>
              </li>
            </ul>
          </article>

          <article className="card">
            <h2>🔹 2. Create React App (Frontend)</h2>
            <p>
              Use Vite starter — below is a quick command example. Adapt if you
              prefer Next CLI.
            </p>

            <div className="code-block">
              <pre>
                <code>
                  npm create vite@latest netflix-frontend --template react
                </code>
              </pre>
            </div>

            <p className="muted">Then:</p>
            <div className="code-grid">
              <div className="code-block small">
                <pre>
                  <code>cd netflix-frontend</code>
                </pre>
              </div>

              <div className="code-block small">
                <pre>
                  <code>
                    npm install react-redux @reduxjs/toolkit axios
                    react-hot-toast react-icons @mui/material @emotion/react
                    @emotion/styled
                  </code>
                </pre>
              </div>

              <div className="code-block small">
                <pre>
                  <code>
                    npm install -D tailwindcss postcss autoprefixer npx
                    tailwindcss init -p
                  </code>
                </pre>
              </div>
            </div>
          </article>

          <article className="card">
            <h2>
              🔹 3. Install Backend Dependencies (if using separate backend)
            </h2>
            <p>
              If you keep a separate Express server, install these in a new
              directory (e.g., <code>netflix-backend</code>):
            </p>

            <div className="code-block">
              <pre>
                <code>
                  mkdir ../netflix-backend cd ../netflix-backend npm init -y npm
                  install express mongoose bcryptjs jsonwebtoken cookie-parser
                  cors dotenv npm install -D nodemon
                </code>
              </pre>
            </div>

            <p className="muted">
              Add scripts in <code>package.json</code>:
            </p>
            <div className="code-block small">
              <pre>
                <code>
                  {
                    '{"scripts": {\n  "start": "node index.js",\n  "dev": "nodemon index.js"\n}}'
                  }
                </code>
              </pre>
            </div>
          </article>

          <article className="card">
            <h2>🔹 4. Environment Variables</h2>
            <p>
              Backend <code>.env</code>:
            </p>
            <div className="code-block small">
              <pre>
                <code>
                  PORT=8080 MONGO_URI=your_mongodb_connection_string
                  JWT_SECRET=your_secret_key
                </code>
              </pre>
            </div>

            <p>
              Frontend <code>.env</code> (Vite / Next adapt accordingly):
            </p>
            <div className="code-block small">
              <pre>
                <code>
                  VITE_API_BASE_URL=http://localhost:8080/api/v1
                  VITE_TMDB_API_KEY=your_tmdb_api_key
                </code>
              </pre>
            </div>
          </article>

          <article className="card">
            <h2>🔹 5. Project Structure</h2>
            <p className="muted">
              (You can also view{" "}
              <a
                href="http://localhost:3000/browse"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://localhost:3000/browse
              </a>
              )
            </p>
          </article>

          <article className="card">
            <h2>🔹 6. Run the Project</h2>
            <div className="code-grid">
              <div className="code-block small">
                <pre>
                  <code>
                    # backend (if separate) cd netflix-backend npm run dev
                  </code>
                </pre>
              </div>

              <div className="code-block small">
                <pre>
                  <code># frontend cd netflix-frontend npm run dev</code>
                </pre>
              </div>
            </div>

            <p className="muted">
              Open your app (Vite default) at <code>http://localhost:5173</code>{" "}
              or Next.js default <code>http://localhost:3000</code>.
            </p>
          </article>

          {/* <footer className="card footer">
            <p>
              Need this exported as a PDF or want the complete{" "}
              <code>index.js</code> / API route examples converted into Next.js?
              <button id="exportPdf" className="btn small">
                Export as PDF
              </button>
            </p>
            <p className="tiny">
              Made with ❤️ — save these files and open <code>index.html</code>.
            </p>
          </footer> */}
        </section>
      </main>
      <div id="toast" className="toast" aria-live="polite"></div>
    </>
  );
};

export default Setup;
