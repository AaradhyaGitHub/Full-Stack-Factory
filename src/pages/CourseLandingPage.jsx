import { useParams } from "react-router-dom";
import styles from "./CourseLandingPage.module.css";
import { useState } from "react";
import { LandingPageData } from "../data/LandingPageData";

const units = LandingPageData.map((section) =>
  section.units.map((unit) => console.log(unit.title))
);

const CourseLandingPage = () => {
  const { courseId } = useParams();
  const currentSection = LandingPageData.find(
    (section) => section.id === courseId
  );
  console.log(currentSection);
  const course = currentSection.title;
  const [activePage, setActivePage] = useState("curriculum");

  //object to map over for Pagedata

  if (!course)
    return <div className={styles.notFound}>Course not found 🥲</div>;

  return (
    <div className={styles.pageContainer}>
      {/* Left Sidebar Navigation */}
      <nav className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <h2 className={styles.logo}>Full Stack Factory</h2>
        </div>

        <ul className={styles.navItems}>
          <li>
            <button
              className={`${styles.navButton} ${
                activePage === "curriculum" ? styles.active : ""
              }`}
              onClick={() => setActivePage("curriculum")}
            >
              <span className={styles.navIcon}>📚</span>
              <span className={styles.navLabel}>Curriculum</span>
            </button>
          </li>
          <li>
            <button
              className={`${styles.navButton} ${
                activePage === "resources" ? styles.active : ""
              }`}
              onClick={() => setActivePage("resources")}
            >
              <span className={styles.navIcon}>📁</span>
              <span className={styles.navLabel}>Resources</span>
            </button>
          </li>
          <li>
            <button
              className={`${styles.navButton} ${
                activePage === "projects" ? styles.active : ""
              }`}
              onClick={() => setActivePage("projects")}
            >
              <span className={styles.navIcon}>🛠️</span>
              <span className={styles.navLabel}>Projects</span>
            </button>
          </li>
          <li>
            <button
              className={`${styles.navButton} ${
                activePage === "discussion" ? styles.active : ""
              }`}
              onClick={() => setActivePage("discussion")}
            >
              <span className={styles.navIcon}>💬</span>
              <span className={styles.navLabel}>Discussion</span>
            </button>
          </li>
        </ul>

        <div className={styles.sidebarFooter}>
          <div className={styles.courseProgress}>
            <span className={styles.progressLabel}>Course Progress</span>
            <div className={styles.progressBarSmall}>
              <div className={styles.progressFillSmall}></div>
            </div>
            <span className={styles.progressPercentage}>35% Complete</span>
          </div>
        </div>
      </nav>

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
              src={course.image}
              alt={course.title}
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
9;
