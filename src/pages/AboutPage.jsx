import React, { useState, useEffect, useRef } from "react";
import styles from "./About.module.css";

export default function About() {
  const [activeSection, setActiveSection] = useState("philosophy");
  const contentRef = useRef(null);

  // Handle section navigation
  const navigateTo = (section) => {
    setActiveSection(section);

    // Smooth scroll for mobile view
    if (window.innerWidth < 768 && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.logo}>Full Stack Factory</h1>
          <p className={styles.tagline}>
            Breaking down complex systems into clear components
          </p>
        </header>

        <div className={styles.content}>
          <nav className={styles.nav}>
            <button
              className={`${styles.navItem} ${
                activeSection === "philosophy" ? styles.active : ""
              }`}
              onClick={() => navigateTo("philosophy")}
            >
              Philosophy
            </button>
            <button
              className={`${styles.navItem} ${
                activeSection === "approach" ? styles.active : ""
              }`}
              onClick={() => navigateTo("approach")}
            >
              Approach
            </button>
            <button
              className={`${styles.navItem} ${
                activeSection === "journey" ? styles.active : ""
              }`}
              onClick={() => navigateTo("journey")}
            >
              Journey
            </button>
            <button
              className={`${styles.navItem} ${
                activeSection === "author" ? styles.active : ""
              }`}
              onClick={() => navigateTo("author")}
            >
              Author
            </button>
          </nav>

          <div className={styles.contentArea} ref={contentRef}>
            {activeSection === "philosophy" && (
              <div className={styles.section}>
                <h2>The Factory Philosophy</h2>
                <p className={styles.lead}>
                  Just as a factory assembles complex products from simple
                  parts, software development is about composing elegant systems
                  from basic components.
                </p>

                <div className={styles.quote}>
                  "Learning software engineering is like building a car. Master
                  the parts, and you can build any vehicle you want."
                </div>

                <p>
                  Every article here breaks down one component of software
                  engineering, examining it in isolation before connecting it to
                  the larger system. This approach builds a comprehensive mental
                  model where every concept has its place in the whole.
                </p>

                <div className={styles.keyPoints}>
                  <div className={styles.point}>
                    <h3>Clarity Through Deconstruction</h3>
                    <p>
                      Complex systems become manageable when broken into their
                      smallest components.
                    </p>
                  </div>

                  <div className={styles.point}>
                    <h3>Practical Application</h3>
                    <p>
                      Theory is reinforced through hands-on building, making
                      abstract concepts concrete.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "approach" && (
              <div className={styles.section}>
                <h2>Learning Factory Method</h2>

                <div className={styles.processCard}>
                  <div className={styles.processStep}>
                    <div className={styles.processIcon}>
                      <svg viewBox="0 0 24 24">
                        <path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" />
                      </svg>
                    </div>
                    <h3>Learn</h3>
                    <p>
                      Study concepts in isolation, building strong fundamentals
                    </p>
                  </div>

                  <div className={styles.processStep}>
                    <div className={styles.processIcon}>
                      <svg viewBox="0 0 24 24">
                        <path d="M6.46,6.1L2,8.3L12,15L22,8.3L17.54,6.1L12,9.3L6.46,6.1M12,16.6L2,9.9V14.8L12,21.5L22,14.8V9.9L12,16.6Z" />
                      </svg>
                    </div>
                    <h3>Deconstruct</h3>
                    <p>Break complex systems into their smallest components</p>
                  </div>

                  <div className={styles.processStep}>
                    <div className={styles.processIcon}>
                      <svg viewBox="0 0 24 24">
                        <path d="M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5M12,15V17H16V19H12V21L8,18L12,15M8,13C6.67,13 2,14.17 2,17V20H14V17C14,14.17 9.33,13 8,13M16,7A2,2 0 0,0 14,9A2,2 0 0,0 16,11A2,2 0 0,0 18,9A2,2 0 0,0 16,7M16,13C14.71,13 13.5,13.5 12.5,14.25V20H20V17C20,14.5 18.03,13 16,13Z" />
                      </svg>
                    </div>
                    <h3>Connect</h3>
                    <p>Understand how components interact within systems</p>
                  </div>

                  <div className={styles.processStep}>
                    <div className={styles.processIcon}>
                      <svg viewBox="0 0 24 24">
                        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z" />
                      </svg>
                    </div>
                    <h3>Build</h3>
                    <p>Create complete systems with deep understanding</p>
                  </div>
                </div>

                <p className={styles.approachText}>
                  This method turns abstract concepts into practical knowledge.
                  Rather than struggling with overwhelming complexity, you'll
                  build understanding piece by piece, seeing how each element
                  contributes to the whole.
                </p>
              </div>
            )}

            {activeSection === "journey" && (
              <div className={styles.section}>
                <h2>Your Learning Path</h2>

                <div className={styles.roadmap}>
                  <div className={styles.roadmapStep}>
                    <div className={styles.roadmapNumber}>01</div>
                    <div className={styles.roadmapContent}>
                      <h3>Core Foundations</h3>
                      <p>
                        Master fundamental concepts across the stack—from data
                        structures to algorithms, from state management to
                        database design. Each concept is broken down into its
                        essential components.
                      </p>
                    </div>
                  </div>

                  <div className={styles.roadmapStep}>
                    <div className={styles.roadmapNumber}>02</div>
                    <div className={styles.roadmapContent}>
                      <h3>Systems Integration</h3>
                      <p>
                        Learn how to connect isolated components into functional
                        subsystems. Understand patterns that govern interaction
                        between front-end and back-end, database and server, UI
                        and state management.
                      </p>
                    </div>
                  </div>

                  <div className={styles.roadmapStep}>
                    <div className={styles.roadmapNumber}>03</div>
                    <div className={styles.roadmapContent}>
                      <h3>Full Stack Mastery</h3>
                      <p>
                        Build complete applications with deep understanding of
                        how every layer interacts. Gain the confidence to
                        architect, implement, and optimize complex software
                        systems from the ground up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "author" && (
              <div className={styles.section}>
                <h2>About the Author</h2>

                <div className={styles.authorContent}>
                  <div className={styles.authorImagePlaceholder}>
                    <svg viewBox="0 0 24 24" className={styles.authorIcon}>
                      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </svg>
                  </div>

                  <div className={styles.authorBio}>
                    <p>
                      I'm documenting my journey through upper-division Computer
                      Science, transforming complex academic concepts into
                      practical knowledge.
                    </p>
                    <p>
                      With a background in both software development and
                      teaching, I've discovered that the best way to truly
                      master a subject is to break it down to its core
                      components and then rebuild it through practical
                      application.
                    </p>
                    <p>
                      This blog is my way of learning in public—sharing
                      insights, challenges, and discoveries as I build a deeper
                      understanding of the full software stack.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.quote}>
            "The best engineers don't just know the parts; they understand the
            whole machine."
          </div>
        </footer>
      </div>
    </div>
  );
}
