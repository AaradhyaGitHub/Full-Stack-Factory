import { NavLink } from "react-router-dom";
export default function HomePage() {
  return (
    <main>
      <div className="main-title">
        <h1>Full Stack Factory</h1>
        <p>Crafting the parts, you decide how to assemble them</p>
      </div>

      <section className="topics-section">
        <h2>Topics</h2>
        <ul className="topics-grid">
          <NavLink>
            <li className="topic-tile">
              <span className="topic-name">JavaScript</span>
              <p>coming soon...</p>
            </li>
          </NavLink>
          <NavLink>
            <li className="topic-tile">
              <span className="topic-name">React.js</span>
            </li>
          </NavLink>
          <NavLink>
            <li className="topic-tile">
              <span className="topic-name">C/C++ DSA</span>
              <p>coming soon...</p>
            </li>
          </NavLink>
        </ul>
      </section>
    </main>
  );
}
