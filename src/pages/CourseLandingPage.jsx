import { useParams } from "react-router-dom";
import styles from "./CourseLandingPage.module.css";
import { useState } from "react";

const courseData = {
  react: {
    title: "React - The Complete Guide",
    description: "From components to Redux to Next.js",
    image: "/images/react.png",
    unitCount: 12,
    lessonCount: 48
  },
  javascript: {
    title: "JavaScript Mastery",
    description: "Deep dive into JS fundamentals",
    image: "/images/javascript.png",
    unitCount: 10,
    lessonCount: 36
  },
  dsa: {
    title: "Mastering DSA with C++",
    description: "Data Structures & Algorithms bootcamp",
    image: "/images/dsa.png",
    unitCount: 14,
    lessonCount: 52
  }
};

const CourseLandingPage = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];
  const [activePage, setActivePage] = useState("curriculum");

  if (!course) return <div className={styles.notFound}>Course not found 🥲</div>;

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
              className={`${styles.navButton} ${activePage === "curriculum" ? styles.active : ""}`}
              onClick={() => setActivePage("curriculum")}
            >
              <span className={styles.navIcon}>📚</span>
              <span className={styles.navLabel}>Curriculum</span>
            </button>
          </li>
          <li>
            <button 
              className={`${styles.navButton} ${activePage === "resources" ? styles.active : ""}`}
              onClick={() => setActivePage("resources")}
            >
              <span className={styles.navIcon}>📁</span>
              <span className={styles.navLabel}>Resources</span>
            </button>
          </li>
          <li>
            <button 
              className={`${styles.navButton} ${activePage === "projects" ? styles.active : ""}`}
              onClick={() => setActivePage("projects")}
            >
              <span className={styles.navIcon}>🛠️</span>
              <span className={styles.navLabel}>Projects</span>
            </button>
          </li>
          <li>
            <button 
              className={`${styles.navButton} ${activePage === "discussion" ? styles.active : ""}`}
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
            <h1 className={styles.courseTitle}>{course.title}</h1>
            <p className={styles.courseDescription}>{course.description}</p>
            
            <div className={styles.courseStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{course.unitCount}</span>
                <span className={styles.statLabel}>Units</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{course.lessonCount}</span>
                <span className={styles.statLabel}>Lessons</span>
              </div>
            </div>

            <div className={styles.authorInfo}>
              <p>
                Section Author - <span className={styles.authorName}>Aaradhya Poudyal</span>
              </p>
              <button className={styles.authorButton}>Learn more about author</button>
            </div>
          </div>

          <div className={styles.courseImageContainer}>
            <img src={course.image} alt={course.title} className={styles.courseImage} />
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
              <li className={styles.unitItem}>
                <div className={`${styles.unit} ${styles.expanded}`}>
                  <button className={styles.unitToggle}>
                    <span className={styles.unitNumber}>01</span>
                    <span className={styles.unitTitle}>Getting Started with Practical Implementation</span>
                    <span className={styles.expandIcon}></span>
                  </button>
                  <hr className={styles.unitDivider} />
                  <ul className={styles.lessonList}>
                    <li className={`${styles.lessonItem} ${styles.completed}`}>Introduction to the Factory Approach</li>
                    <li className={`${styles.lessonItem} ${styles.active}`}>Building Your First Component</li>
                    <li className={styles.lessonItem}>Creating Interactive UI Elements</li>
                    <li className={styles.lessonItem}>Debugging Common Issues</li>
                  </ul>
                </div>
              </li>

              <li className={styles.unitItem}>
                <div className={styles.unit}>
                  <button className={styles.unitToggle}>
                    <span className={styles.unitNumber}>02</span>
                    <span className={styles.unitTitle}>Advanced Concepts in Practice</span>
                    <span className={styles.expandIcon}></span>
                  </button>
                  <hr className={styles.unitDivider} />
                  <ul className={styles.lessonList}>
                    <li className={styles.lessonItem}>State Management Architecture</li>
                    <li className={styles.lessonItem}>Building a Shopping Cart Feature</li>
                    <li className={styles.lessonItem}>Form Validation Strategies</li>
                    <li className={styles.lessonItem}>Performance Optimization Techniques</li>
                  </ul>
                </div>
              </li>
              
              <li className={styles.unitItem}>
                <div className={styles.unit}>
                  <button className={styles.unitToggle}>
                    <span className={styles.unitNumber}>03</span>
                    <span className={styles.unitTitle}>Project Implementation Patterns</span>
                    <span className={styles.expandIcon}></span>
                  </button>
                  <hr className={styles.unitDivider} />
                  <ul className={styles.lessonList}>
                    <li className={styles.lessonItem}>Architecting Complex Components</li>
                    <li className={styles.lessonItem}>Real-World Data Fetching</li>
                    <li className={styles.lessonItem}>Authentication Workflows</li>
                    <li className={styles.lessonItem}>Deployment Best Practices</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CourseLandingPage;