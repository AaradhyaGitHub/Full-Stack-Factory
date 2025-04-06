import { useParams } from "react-router-dom";
import styles from "./CourseLandingPage.module.css";
import { useState } from "react";
import { LandingPageData } from "../data/LandingPageData";
import Navbar from "../components/nav/Navbar"; // Adjust path as needed

const CourseLandingPage = () => {
  const { courseId } = useParams();
  const currentSection = LandingPageData.find(
    (section) => section.id === courseId
  );
  const course = currentSection?.title;
  const [activePage, setActivePage] = useState("curriculum");

  if (!course)
    return <div className={styles.notFound}>Course not found 🥲</div>;

  // Define sidebar navigation links
  const sideNavLinks = [
    {
      navItem: "Curriculum",
      navDest: `/courses/${courseId}/curriculum`,
      icon: "📚"
    },
    {
      navItem: "Resources",
      navDest: `/courses/${courseId}/resources`,
      icon: "📁"
    },
    {
      navItem: "Projects",
      navDest: `/courses/${courseId}/projects`,
      icon: "🛠️"
    },
    {
      navItem: "Discussion",
      navDest: `/courses/${courseId}/discussion`,
      icon: "💬"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Replace the old sidebar with the Navbar component */}
      <Navbar
        navLinks={sideNavLinks}
        orientation="vertical"
        logo="Full Stack Factory"
        showProgress={true}
        progressPercent={35}
      />

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.courseHeader}>
          <div className={styles.headerContent}>
            <h1 className={styles.courseTitle}>{currentSection.title}</h1>
            <p className={styles.courseDescription}>
              {currentSection.description}
            </p>

            <div className={styles.courseStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {currentSection.unitCount}
                </span>
                <span className={styles.statLabel}>Units</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {currentSection.lessonCount}
                </span>
                <span className={styles.statLabel}>Lessons</span>
              </div>
            </div>

            <div className={styles.authorInfo}>
              <p>
                Section Author -{" "}
                <span className={styles.authorName}>
                  {currentSection.author}
                </span>
              </p>
              <button className={styles.authorButton}>
                Learn more about author
              </button>
              <p>
                Released on: <span>{currentSection.date}</span>
              </p>
            </div>
          </div>

          <div className={styles.courseImageContainer}>
            <img
              src={currentSection.image}
              alt={currentSection.title}
              className={styles.courseImage}
            />
          </div>
        </header>

        <section className={styles.courseTabs}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
            <div className={styles.progressMarkers}>
              <span className={`${styles.marker} ${styles.active}`}>Start</span>
              <span className={styles.marker}>25%</span>
              <span className={styles.marker}>50%</span>
              <span className={styles.marker}>75%</span>
              <span className={styles.marker}>Complete</span>
            </div>
          </div>

          <div className={styles.curriculum}>
            <h2 className={styles.curriculumTitle}>Course Curriculum</h2>
            <ul className={styles.unitList}>
              {currentSection.units.map((unit) => (
                <li key={unit.id} className={styles.unitItem}>
                  <div className={`${styles.unit} ${styles.expanded}`}>
                    <button className={styles.unitToggle}>
                      <span className={styles.unitNumber}>01</span>
                      <span className={styles.unitTitle}>{unit.title}</span>
                      <span className={styles.expandIcon}></span>
                    </button>
                    <hr className={styles.unitDivider} />
                    <ul className={styles.lessonList}>
                      {unit.topicsCovered.map((topic) => (
                        <li key={topic} className={styles.lessonItem}>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CourseLandingPage;
