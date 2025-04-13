import { useParams } from "react-router-dom";
import styles from "./CourseSidebarLayout.module.css"; // You'll need to create this
import { LandingPageData } from "../data/LandingPageData";
import Navbar from "../components/nav/Navbar";
import { LandingPageDataTest } from "../data/LandingPageDataTest";

const CourseSidebarLayout = ({ children }) => {
  const { courseId, unitId,articleId } = useParams();

  // Find the current course section
  const currentSection = LandingPageData.find(
    (section) => section.id === courseId
  );

  if (!currentSection)
    return <div className={styles.notFound}>Course not found 🥲</div>;

  // Build navigation links for sidebar
  const currentTestSection = LandingPageDataTest.find(
    (section) => section.id === courseId
  );
  const currentUnit = currentTestSection?.units?.find(
    (unit) => unit.id === unitId
  );

  const currentLessonNavLinks = currentUnit?.topicsCovered?.flatMap((lesson) =>
  lesson.lessonArticles.map((article) => ({
    navItem: article,
    navDest: `/courses/${courseId}/${unitId}/${encodeURIComponent(article)}`
  }))
) || [];


  const currentSideNavLinks =
    (currentSection.units &&
      currentSection.units.map((unit) => {
        return {
          navItem: unit.title,
          navDest: `/courses/${courseId}/${unit.id}`
        };
      })) ||
    [];

  let navigationLink;

  if (articleId && unitId) {
    navigationLink = currentLessonNavLinks;
  } else if (unitId) {
    navigationLink = currentSideNavLinks;
  } else {
    navigationLink = currentSideNavLinks; // or maybe a course overview?
  }

  return (
    <div className={styles.pageContainer}>
      <Navbar
        navLinks={navigationLink}
        orientation="vertical"
        logo="Full Stack Factory"
        showProgress={true}
        progressPercent={0}
      />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default CourseSidebarLayout;
