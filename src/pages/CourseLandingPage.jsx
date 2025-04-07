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

  //Navbar Builder
  //Navbar expects:
  // navLinks={sideNavLinks}
  // orientation="vertical"
  // logo="Full Stack Factory"
  // showProgress={true}
  // progressPercent={35}

  const currentSectionUnitTitles = currentSection.units.map((unit) => {
    return unit.title;
  });
  console.log(currentSectionUnitTitles);
  const currentSideNavLinks = currentSectionUnitTitles.map((title) => {
    return {
      navItem: title,
      navDest: `/courses/${courseId}/curriculum`
    };
  });

  console.log(currentSideNavLinks);

  return (
    <div className={styles.pageContainer}>
      {/* Replace the old sidebar with the Navbar component */}
      <Navbar
        navLinks={currentSideNavLinks}
        orientation="vertical"
        logo="Full Stack Factory"
        showProgress={true}
        progressPercent={0}
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
              <div className={styles.authorAvatar}>
                <span>{currentSection.author.charAt(0)}</span>
              </div>
              <div className={styles.authorDetails}>
                <h4 className={styles.authorName}>{currentSection.author}</h4>
                <div className={styles.authorMeta}>
                  <span className={styles.publishDate}>
                    Released: {currentSection.date}
                  </span>
                  <button className={styles.authorButton}>
                    Learn more about author
                  </button>
                </div>
              </div>
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
              {currentSection.units.map((unit, index) => (
                <li key={unit.id} className={styles.unitItem}>
                  <div className={`${styles.unit} ${styles.expanded}`}>
                    <button className={styles.unitToggle}>
                      <span className={styles.unitNumber}>{index + 1}</span>
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
