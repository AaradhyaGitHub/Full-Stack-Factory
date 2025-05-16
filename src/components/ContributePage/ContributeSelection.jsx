import { useState } from "react";
import { LandingPageData } from "../../data/LandingPageData";
import styles from "./ContributeSelection.module.css";

export default function ContributeSelection() {
  const [sections, setSections] = useState(LandingPageData);
  const [showForm, setShowForm] = useState(false);
  const [newSection, setNewSection] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    unitCount: "",
    lessonCount: "",
    difficultyLevel: "",
    author: "",
    date: "",
    courses: []
  });

  const handleAddSection = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSections([...sections, { ...newSection, courses: [] }]);

    setNewSection({
      id: "",
      title: "",
      description: "",
      image: "",
      unitCount: "",
      lessonCount: "",
      difficultyLevel: "",
      author: "",
      date: "",
      courses: []
    });

    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSection({
      ...newSection,
      [name]: value
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setNewSection({
      id: "",
      title: "",
      description: "",
      image: "",
      unitCount: "",
      lessonCount: "",
      difficultyLevel: "",
      author: "",
      date: "",
      courses: []
    });
  };

  return (
    <div className={styles.contributePage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contribute to Our Learning Platform</h1>
          <p className={styles.subtitle}>
            Help us grow our collection of courses and learning resources
          </p>
        </header>

        <section className={styles.courseSection}>
          <div className={styles.sectionHeader}>
            <h2>Available Course Sections</h2>
            <button className={styles.addButton} onClick={handleAddSection}>
              Add New Section
            </button>
          </div>

          <div className={styles.coursesList}>
            {sections.map((section, index) => (
              <div key={index} className={styles.courseCard}>
                <h3>{section.title}</h3>
                <p>{section.description || "No description available"}</p>
                <div className={styles.courseCount}>
                  {section.courses?.length || 0} Courses
                </div>
              </div>
            ))}
          </div>
        </section>

        {showForm && (
          <div className={styles.formOverlay}>
            <div className={styles.formContainer}>
              <h2>Add New Section</h2>
              <form onSubmit={handleFormSubmit} className={styles.form}>
                {[
                  { label: "Section ID", name: "id", type: "text" },
                  { label: "Title", name: "title", type: "text" },
                  {
                    label: "Description",
                    name: "description",
                    type: "textarea"
                  },
                  { label: "Image URL", name: "image", type: "text" },
                  { label: "Unit Count", name: "unitCount", type: "number" },
                  {
                    label: "Lesson Count",
                    name: "lessonCount",
                    type: "number"
                  },
                  {
                    label: "Difficulty Level",
                    name: "difficultyLevel",
                    type: "text"
                  },
                  { label: "Author", name: "author", type: "text" },
                  { label: "Date", name: "date", type: "text" }
                ].map(({ label, name, type }) => (
                  <div key={name} className={styles.formGroup}>
                    <label htmlFor={name}>{label}</label>
                    {type === "textarea" ? (
                      <textarea
                        id={name}
                        name={name}
                        value={newSection[name]}
                        onChange={handleInputChange}
                        required
                        className={styles.textarea}
                        rows="4"
                      />
                    ) : (
                      <input
                        type={type}
                        id={name}
                        name={name}
                        value={newSection[name]}
                        onChange={handleInputChange}
                        required
                        className={styles.input}
                      />
                    )}
                  </div>
                ))}

                <div className={styles.formActions}>
                  <button
                    type="button"
                    className={styles.cancelButton}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    Add Section
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
