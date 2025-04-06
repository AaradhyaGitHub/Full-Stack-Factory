import { useParams } from "react-router-dom";

const courseData = {
  react: {
    title: "React - The Complete Guide",
    description: "From components to Redux to Next.js",
    image: "/images/react.png"
  },
  javascript: {
    title: "JavaScript Mastery",
    description: "Deep dive into JS fundamentals",
    image: "/images/javascript.png"
  },
  dsa: {
    title: "Mastering DSA with C++",
    description: "Data Structures & Algorithms bootcamp",
    image: "/images/dsa.png"
  }
};

const CourseLandingPage = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) return <h2>Course not found 🥲</h2>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-2 text-gray-600">{course.description}</p>
      <img
        src={course.image}
        alt={course.title}
        className="mt-4 rounded-xl max-w-md"
      />
    </div>
  );
};

export default CourseLandingPage;
