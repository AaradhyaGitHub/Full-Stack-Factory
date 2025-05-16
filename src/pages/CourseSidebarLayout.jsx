import { useParams } from "react-router-dom";
import styles from "./CourseSidebarLayout.module.css"; // You'll need to create this
import { LandingPageData } from "../data/LandingPageData";
import Navbar from "../components/nav/Navbar";

const CourseSidebarLayout = ({ children }) => {
  const { courseId, unitId, lessonId } = useParams();

  // Find the current course section
  const currentSection = LandingPageData.find(
    (section) => section.id === courseId
  );

  if (!currentSection)
    return <div className={styles.notFound}>Course not found 🥲</div>;

  // Find current unit (if selected)
  const currentUnit = currentSection.units?.find((unit) => unit.id === unitId);

  // Find current lesson (if selected)
  const currentLesson = currentUnit?.topicsCovered?.find(
    (topic) => topic.lessonId === lessonId
  );

  // Build navigation links
  // These are the course's units (always shown in the sidebar)
  const unitNavLinks = currentSection.units.map((unit) => ({
    navItem: unit.title,
    navDest: `/courses/${courseId}/${unit.id}`,
    isActive: unit.id === unitId
  }));

  // If a unit is selected, also show its lessons
  const lessonNavLinks =
    currentUnit?.topicsCovered?.map((topic) => ({
      navItem: topic.lessonTitle,
      navDest: `/courses/${courseId}/${unitId}/${topic.lessonId}`,
      isActive: topic.lessonId === lessonId,
      isSubItem: true
    })) || [];

  // If a lesson is selected, also show its articles
  const articleNavLinks =
    currentLesson?.lessonArticles?.map((article, index) => ({
      navItem: article,
      navDest: `/courses/${courseId}/${unitId}/${lessonId}/${index}`,
      isSubSubItem: true
    })) || [];

  // Combine all navigation links
  const navigationLinks = [
    ...unitNavLinks,
    ...(unitId ? lessonNavLinks : []),
    ...(lessonId ? articleNavLinks : [])
  ];

  // Calculate progress (just an example based on URL depth)
  let progressPercent = 0;
  if (courseId) progressPercent = 25;
  if (unitId) progressPercent = 50;
  if (lessonId) progressPercent = 75;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.sidebar}>
        <h3 className={styles.courseTitle}>{currentSection.title}</h3>
        <Navbar
          navLinks={navigationLinks}
          orientation="vertical"
          logo="Full Stack Factory"
          showProgress={true}
          progressPercent={progressPercent}
        />
      </div>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default CourseSidebarLayout;
