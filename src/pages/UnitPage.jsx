import { useParams, NavLink } from "react-router-dom";
import styles from "./UnitPage.module.css";
import Article from "../components/article/Article";
import { CheckCircle } from "lucide-react";
import { LandingPageDataTest } from "../data/LandingPageDataTest";

export default function UnitPage() {
  const { courseId } = useParams();

  const { unitId } = useParams();

  const currentSection = LandingPageDataTest.find(
    (section) => section.id === courseId
  );

  const currentUnit = currentSection.units.find((unit) => unit.id === unitId);

  // console.log(
  //   currentSection.units.map((unit) =>
  //     unit.topicsCovered.map((lesson) => lesson.lessonTitle)
  //   )
  // );

  return (
    <div className={styles.unitPage}>
      <main className={styles.mainContent}>
        <header className={styles.headerContent}>
          <h1 className={styles.courseTitle}>
            {currentUnit.id.toUpperCase()}: {currentUnit.title}
          </h1>

          <div className={styles.aboutUnit}>
            <h2 className={styles.aboutUnitHeading}>About this unit</h2>
            <p className={styles.description}> {currentUnit.title}</p>
          </div>
        </header>
        {currentUnit.topicsCovered.map((lesson) => (
          <section className={styles.lessonSection}>
            <div className={styles.lessonTabs}>
              <NavLink>
                <h1 className={styles.lessonTitle}>{lesson.lessonTitle}</h1>
              </NavLink>

              <p className={styles.lessonDescription}>{lesson.lessonTitle}</p>
              <p className={styles.lessonInfo}>Duration: 2hr</p>

              <ul className={styles.articleList}>
                {lesson.lessonArticles.map((article) => (
                  <li className={styles.articleItem}>
                    <div className={styles.articleTitleContainer}>
                      <NavLink>
                        <span className={styles.articleProgressGraphics}>
                          <CheckCircle size={18} color="#e63946" />
                        </span>
                        <span className={styles.article}>{article}</span>
                      </NavLink>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
