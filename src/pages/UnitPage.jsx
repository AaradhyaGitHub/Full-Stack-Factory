import { useParams, NavLink } from "react-router-dom";
import styles from "./UnitPage.module.css";
import Article from "../components/article/Article";

export default function UnitPage() {
  const { unitId } = useParams();

  return (
    <div className={styles.unitPage}>
      <main className={styles.mainContent}>
        <header className={styles.headerContent}>
          <h1 className={styles.courseTitle}>Unit 1: Intro To React..</h1>

          <div className={styles.aboutUnit}>
            <h2 className={styles.aboutUnitHeading}>About this unit..</h2>
            <p className={styles.description}>This is the info init fam</p>
          </div>
        </header>

        <section className={styles.lessonSection}>
          <div className={styles.lessonTabs}>
            <NavLink>
              <h1 className={styles.lessonTitle}>This is name of the lesson</h1>
            </NavLink>

            <p className={styles.lessonDescription}>
              This is the description of the lesson
            </p>
            <p className={styles.lessonInfo}>Duration: 2hr</p>

            <ul className={styles.articleList}>
              <li className={styles.articleItem}>
                <div className={styles.articleTitleContainer}>
                  Lesson - 1
                  <NavLink>
                    <span className={styles.articleProgressGraphics}>
                      This is a flexible graphics that will change probably
                      something from react lucide
                    </span>
                    <span className={styles.article}>
                      This is the article name
                    </span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
