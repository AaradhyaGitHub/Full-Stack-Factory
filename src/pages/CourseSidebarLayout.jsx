import { useParams } from "react-router-dom";
import styles from "./CourseSidebarLayout.module.css"; // You'll need to create this
import { LandingPageData } from "../data/LandingPageData";
import Navbar from "../components/nav/Navbar";

const CourseSidebarLayout = ({ children }) => {
  const { courseId } = useParams();

  // Find the current course section
  const currentSection = LandingPageData.find(
    (section) => section.id === courseId
  );

  if (!currentSection)
    return <div className={styles.notFound}>Course not found 🥲</div>;

  // Build navigation links for sidebar
  const currentSideNavLinks =
    (currentSection.units &&
      currentSection.units.map((unit) => {
        return {
          navItem: unit.title,
          navDest: `/courses/${courseId}/${unit.id}`
        };
      })) ||
    [];

  return (
    <div className={styles.pageContainer}>
      <Navbar
        navLinks={currentSideNavLinks}
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
