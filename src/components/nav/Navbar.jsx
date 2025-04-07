// Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar({
  navLinks,
  orientation = "horizontal",
  logo = "Full Stack Factory",
  showProgress = false,
  progressPercent = 0
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Track window width for responsive behavior
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when link is clicked on mobile
  const handleLinkClick = () => {
    if (windowWidth <= 768) {
      setIsOpen(false);
    }
  };

  // Determine if we should show mobile view
  const isMobile = windowWidth <= 768;

  // Sidebar is active when orientation is vertical or when mobile menu is open
  const showSidebar = orientation === "vertical" || (isMobile && isOpen);

  return (
    <>
      {/* Main Navbar that's always visible */}
      <header className={`navbar-container ${orientation}`}>
        {orientation === "horizontal" && (
          <>
            <div className="logo-container">
              <div className="logo-icon"></div>
              <h2 className="logo-text">{logo}</h2>
            </div>

            {!isMobile && (
              <nav className="navbar">
                <ul>
                  {navLinks.map((navLink) => (
                    <li key={navLink.navItem}>
                      <NavLink
                        to={navLink.navDest}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {navLink.navItem}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {isMobile && (
              <button className="hamburger-btn" onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </>
        )}

        {orientation === "vertical" && !isMobile && (
          <>
            <div className="logo-container">
              <div className="logo-icon"></div>
              <h2 className="logo-text">{logo}</h2>
            </div>

            <nav className="navbar">
              <ul>
                {navLinks.map((navLink) => (
                  <li key={navLink.navItem}>
                    <NavLink
                      to={navLink.navDest}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      onClick={handleLinkClick}
                    >
                      <span className="nav-label">{navLink.navItem}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {showProgress && (
              <div className="sidebar-footer">
                <div className="progress-container">
                  <span className="progress-label">Course Progress</span>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                  <span className="progress-percentage">
                    {progressPercent}% Complete
                  </span>
                </div>
              </div>
            )}
          </>
        )}
      </header>

      {/* Mobile Sidebar (only shown when hamburger clicked) */}
      {isMobile && showSidebar && (
        <div className={`sidebar-overlay ${isOpen ? "open" : ""}`}>
          <div className="sidebar">
            <div className="sidebar-header">
              <div className="logo-container">
                <div className="logo-icon"></div>
                <h2 className="logo-text">{logo}</h2>
              </div>
              <button className="close-btn" onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>

            <nav className="sidebar-nav">
              <ul>
                {navLinks.map((navLink) => (
                  <li key={navLink.navItem}>
                    <NavLink
                      to={navLink.navDest}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      onClick={handleLinkClick}
                    >
                      {navLink.icon && (
                        <span className="nav-icon">{navLink.icon}</span>
                      )}
                      <span className="nav-label">{navLink.navItem}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {showProgress && (
              <div className="sidebar-footer">
                <div className="progress-container">
                  <span className="progress-label">Course Progress</span>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                  <span className="progress-percentage">
                    {progressPercent}% Complete
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* For vertical orientation when not mobile, this creates space for the fixed sidebar */}
      {orientation === "vertical" && !isMobile && (
        <div className="sidebar-spacer"></div>
      )}
    </>
  );
}
