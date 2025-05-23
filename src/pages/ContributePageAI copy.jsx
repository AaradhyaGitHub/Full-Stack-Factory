import React, { useState } from "react";
import styles from "./ContributePageAI.module.css";

const ContributePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toISOString().split("T")[0],
    readTime: "",
    category: "",
    heroImage: "",
    imageCaption: "",
    tableOfContents: [{ title: "", anchor: "" }],
    introText: "",
    whyItMatters: "",
    featureList: ["", "", ""],
    useStateSection: {
      description: "",
      codeExample: ""
    },
    useEffectSection: {
      description: "",
      imageAlt: "",
      explanation: "",
      controllingEffects: "",
      codeExample: ""
    },
    comparisonTableData: [{ feature: "", classComponent: "", hooks: "" }],
    customHooksSection: {
      description: "",
      codeExample: "",
      additionalInfo: "",
      tip: ""
    },
    bestPracticesList: ["", "", "", "", ""],
    summary: {
      mainSummary: "",
      additionalSummary: ""
    },
    nextLesson: {
      title: ""
    },
    author: {
      name: "",
      title: ""
    },
    relatedArticles: ["", "", ""]
  });

  const handleChange = (e, section, index, field) => {
    const { name, value } = e.target;

    if (section) {
      if (Array.isArray(formData[section])) {
        // Handle array fields like tableOfContents, featureList, etc.
        const updatedArray = [...formData[section]];
        if (field) {
          updatedArray[index] = {
            ...updatedArray[index],
            [field]: value
          };
        } else {
          updatedArray[index] = value;
        }

        setFormData({
          ...formData,
          [section]: updatedArray
        });
      } else if (field) {
        // Handle nested object fields
        setFormData({
          ...formData,
          [section]: {
            ...formData[section],
            [field]: value
          }
        });
      } else {
        // Handle direct section fields
        setFormData({
          ...formData,
          [section]: value
        });
      }
    } else {
      // Handle top-level fields
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const addTableOfContentsItem = () => {
    setFormData({
      ...formData,
      tableOfContents: [...formData.tableOfContents, { title: "", anchor: "" }]
    });
  };

  const removeTableOfContentsItem = (index) => {
    const updatedToc = [...formData.tableOfContents];
    updatedToc.splice(index, 1);
    setFormData({
      ...formData,
      tableOfContents: updatedToc
    });
  };

  const addFeatureListItem = () => {
    setFormData({
      ...formData,
      featureList: [...formData.featureList, ""]
    });
  };

  const removeFeatureListItem = (index) => {
    const updatedList = [...formData.featureList];
    updatedList.splice(index, 1);
    setFormData({
      ...formData,
      featureList: updatedList
    });
  };

  const addBestPracticeItem = () => {
    setFormData({
      ...formData,
      bestPracticesList: [...formData.bestPracticesList, ""]
    });
  };

  const removeBestPracticeItem = (index) => {
    const updatedList = [...formData.bestPracticesList];
    updatedList.splice(index, 1);
    setFormData({
      ...formData,
      bestPracticesList: updatedList
    });
  };

  const addComparisonRow = () => {
    setFormData({
      ...formData,
      comparisonTableData: [
        ...formData.comparisonTableData,
        { feature: "", classComponent: "", hooks: "" }
      ]
    });
  };

  const removeComparisonRow = (index) => {
    const updatedTable = [...formData.comparisonTableData];
    updatedTable.splice(index, 1);
    setFormData({
      ...formData,
      comparisonTableData: updatedTable
    });
  };

  const addRelatedArticle = () => {
    setFormData({
      ...formData,
      relatedArticles: [...formData.relatedArticles, ""]
    });
  };

  const removeRelatedArticle = (index) => {
    const updatedArticles = [...formData.relatedArticles];
    updatedArticles.splice(index, 1);
    setFormData({
      ...formData,
      relatedArticles: updatedArticles
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Article submitted:", formData);
    // Here you would typically save the article or send it to an API
    alert("Article submitted successfully!");
  };

  const previewArticle = () => {
    // This would typically open a preview modal or navigate to a preview page
    console.log("Preview article:", formData);
    alert("Preview functionality would be implemented here");
  };

  return (
    <div className={styles.contributePage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Contribute a New Article</h1>
          <p>Share your knowledge with the React community</p>
        </header>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Article Header Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Article Header</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="title" className={styles.label}>
                Article Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={(e) => handleChange(e)}
                placeholder="E.g., Understanding React Hooks: A Comprehensive Guide"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="date" className={styles.label}>
                  Publication Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={(e) => handleChange(e)}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="readTime" className={styles.label}>
                  Read Time (minutes)
                </label>
                <input
                  type="number"
                  id="readTime"
                  name="readTime"
                  value={formData.readTime}
                  onChange={(e) => handleChange(e)}
                  placeholder="E.g., 12"
                  className={styles.input}
                  min="1"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="category" className={styles.label}>
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={(e) => handleChange(e)}
                  placeholder="E.g., React Fundamentals"
                  className={styles.input}
                  required
                />
              </div>
            </div>
          </section>

          {/* Hero Image Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Hero Image</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="heroImage" className={styles.label}>
                Image URL
              </label>
              <input
                type="url"
                id="heroImage"
                name="heroImage"
                value={formData.heroImage}
                onChange={(e) => handleChange(e)}
                placeholder="Enter image URL or upload"
                className={styles.input}
              />
              <div className={styles.uploadButton}>
                <span>or Upload Image</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="imageCaption" className={styles.label}>
                Image Caption
              </label>
              <input
                type="text"
                id="imageCaption"
                name="imageCaption"
                value={formData.imageCaption}
                onChange={(e) => handleChange(e)}
                placeholder="E.g., React Hooks provide a simpler way to manage state and side effects"
                className={styles.input}
              />
            </div>
          </section>

          {/* Table of Contents Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Table of Contents</h2>
            <p className={styles.sectionDescription}>
              Add sections that will appear in your article's table of contents.
            </p>

            {formData.tableOfContents.map((item, index) => (
              <div key={index} className={styles.tocItem}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>
                      Section Title {index + 1}
                    </label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        handleChange(e, "tableOfContents", index, "title")
                      }
                      placeholder="E.g., Introduction to React Hooks"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>
                      Anchor ID {index + 1}
                    </label>
                    <input
                      type="text"
                      value={item.anchor}
                      onChange={(e) =>
                        handleChange(e, "tableOfContents", index, "anchor")
                      }
                      placeholder="E.g., introduction"
                      className={styles.input}
                      required
                    />
                  </div>

                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeTableOfContentsItem(index)}
                      className={styles.removeButton}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addTableOfContentsItem}
              className={styles.addButton}
            >
              + Add Section
            </button>
          </section>

          {/* Introduction Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Introduction</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="introText" className={styles.label}>
                Introduction Text
              </label>
              <textarea
                id="introText"
                name="introText"
                value={formData.introText}
                onChange={(e) => handleChange(e)}
                placeholder="Write an engaging introduction to your topic..."
                className={styles.textarea}
                rows="6"
                required
              ></textarea>
            </div>
          </section>

          {/* Why It Matters Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Why It Matters</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="whyItMatters" className={styles.label}>
                Why This Topic Is Important
              </label>
              <textarea
                id="whyItMatters"
                name="whyItMatters"
                value={formData.whyItMatters}
                onChange={(e) => handleChange(e)}
                placeholder="Explain why readers should care about this topic..."
                className={styles.textarea}
                rows="4"
                required
              ></textarea>
            </div>

            <h3 className={styles.subSectionTitle}>Key Features or Benefits</h3>
            {formData.featureList.map((feature, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>
                      Feature/Benefit {index + 1}
                    </label>
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleChange(e, "featureList", index)}
                      placeholder="E.g., Reusing stateful logic - Hooks make it possible to extract and reuse logic"
                      className={styles.input}
                      required={index < 3}
                    />
                  </div>

                  {index > 2 && (
                    <button
                      type="button"
                      onClick={() => removeFeatureListItem(index)}
                      className={styles.removeButton}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addFeatureListItem}
              className={styles.addButton}
            >
              + Add Feature/Benefit
            </button>
          </section>

          {/* useState Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>useState Hook Section</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="useStateDescription" className={styles.label}>
                Description
              </label>
              <textarea
                id="useStateDescription"
                value={formData.useStateSection.description}
                onChange={(e) =>
                  handleChange(e, "useStateSection", null, "description")
                }
                placeholder="Describe how useState works..."
                className={styles.textarea}
                rows="4"
                required
              ></textarea>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="useStateCodeExample" className={styles.label}>
                Code Example
              </label>
              <textarea
                id="useStateCodeExample"
                value={formData.useStateSection.codeExample}
                onChange={(e) =>
                  handleChange(e, "useStateSection", null, "codeExample")
                }
                placeholder="const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
}"
                className={styles.codeTextarea}
                rows="8"
                required
              ></textarea>
            </div>
          </section>

          {/* useEffect Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>useEffect Hook Section</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="useEffectDescription" className={styles.label}>
                Description
              </label>
              <textarea
                id="useEffectDescription"
                value={formData.useEffectSection.description}
                onChange={(e) =>
                  handleChange(e, "useEffectSection", null, "description")
                }
                placeholder="Describe how useEffect works..."
                className={styles.textarea}
                rows="4"
                required
              ></textarea>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="useEffectImageAlt" className={styles.label}>
                Image Alt Text
              </label>
              <input
                type="text"
                id="useEffectImageAlt"
                value={formData.useEffectSection.imageAlt}
                onChange={(e) =>
                  handleChange(e, "useEffectSection", null, "imageAlt")
                }
                placeholder="E.g., useEffect lifecycle"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="useEffectExplanation" className={styles.label}>
                Detailed Explanation
              </label>
              <textarea
                id="useEffectExplanation"
                value={formData.useEffectSection.explanation}
                onChange={(e) =>
                  handleChange(e, "useEffectSection", null, "explanation")
                }
                placeholder="Explain how useEffect relates to lifecycle methods..."
                className={styles.textarea}
                rows="4"
                required
              ></textarea>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="controllingEffects" className={styles.label}>
                Controlling When Effects Run
              </label>
              <textarea
                id="controllingEffects"
                value={formData.useEffectSection.controllingEffects}
                onChange={(e) =>
                  handleChange(
                    e,
                    "useEffectSection",
                    null,
                    "controllingEffects"
                  )
                }
                placeholder="Explain how to control when effects run..."
                className={styles.textarea}
                rows="3"
                required
              ></textarea>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="useEffectCodeExample" className={styles.label}>
                Code Example
              </label>
              <textarea
                id="useEffectCodeExample"
                value={formData.useEffectSection.codeExample}
                onChange={(e) =>
                  handleChange(e, "useEffectSection", null, "codeExample")
                }
                placeholder="useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes"
                className={styles.codeTextarea}
                rows="6"
                required
              ></textarea>
            </div>
          </section>

          {/* Comparison Table */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Comparison Table</h2>
            <p className={styles.sectionDescription}>
              Compare class components vs Hooks for different features.
            </p>

            <div className={styles.comparisonTableBuilder}>
              <div className={styles.comparisonHeader}>
                <div className={styles.comparisonHeaderCell}>Feature</div>
                <div className={styles.comparisonHeaderCell}>
                  Class Components
                </div>
                <div className={styles.comparisonHeaderCell}>Hooks</div>
                <div className={styles.comparisonHeaderCell}>Actions</div>
              </div>

              {formData.comparisonTableData.map((row, index) => (
                <div key={index} className={styles.comparisonRow}>
                  <div className={styles.comparisonCell}>
                    <input
                      type="text"
                      value={row.feature}
                      onChange={(e) => {
                        const updatedValue = e.target.value;
                        handleChange(
                          { target: { value: updatedValue } },
                          "comparisonTableData",
                          index,
                          "feature"
                        );
                      }}
                      placeholder="E.g., State Management"
                      className={styles.tableInput}
                      required
                    />
                  </div>
                  <div className={styles.comparisonCell}>
                    <input
                      type="text"
                      value={row.classComponent}
                      onChange={(e) => {
                        const updatedValue = e.target.value;
                        handleChange(
                          { target: { value: updatedValue } },
                          "comparisonTableData",
                          index,
                          "classComponent"
                        );
                      }}
                      placeholder="E.g., Using this.state and this.setState"
                      className={styles.tableInput}
                      required
                    />
                  </div>
                  <div className={styles.comparisonCell}>
                    <input
                      type="text"
                      value={row.hooks}
                      onChange={(e) => {
                        const updatedValue = e.target.value;
                        handleChange(
                          { target: { value: updatedValue } },
                          "comparisonTableData",
                          index,
                          "hooks"
                        );
                      }}
                      placeholder="E.g., Using useState hook"
                      className={styles.tableInput}
                      required
                    />
                  </div>
                  <div className={styles.comparisonCell}>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeComparisonRow(index)}
                        className={styles.removeButton}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addComparisonRow}
                className={styles.addButton}
              >
                + Add Row
              </button>
            </div>
          </section>

          {/* Custom Hooks Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Custom Hooks Section</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="customHooksDescription" className={styles.label}>
                Description
              </label>
              <textarea
                id="customHooksDescription"
                value={formData.customHooksSection.description}
                onChange={(e) =>
                  handleChange(e, "customHooksSection", null, "description")
                }
                placeholder="Describe what custom hooks are and how they're used..."
                className={styles.textarea}
                rows="4"
                required
              ></textarea>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="customHooksCodeExample" className={styles.label}>
                Code Example
              </label>
              <textarea
                id="customHooksCodeExample"
                value={formData.customHooksSection.codeExample}
                onChange={(e) =>
                  handleChange(e, "customHooksSection", null, "codeExample")
                }
                placeholder="// Custom Hook for form handling
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return {
    value,
    onChange: handleChange
  };
}"
                className={styles.codeTextarea}
                rows="14"
                required
              ></textarea>
            </div>

            <div className={styles.inputGroup}>
              <label
                htmlFor="customHooksAdditionalInfo"
                className={styles.label}
              >
                Additional Information
              </label>
              <textarea
                id="customHooksAdditionalInfo"
                value={formData.customHooksSection.additionalInfo}
                onChange={(e) =>
                  handleChange(e, "customHooksSection", null, "additionalInfo")
                }
                placeholder="Explain the benefits of custom hooks..."
                className={styles.textarea}
                rows="3"
                required
              ></textarea>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="customHooksTip" className={styles.label}>
                Pro Tip
              </label>
              <textarea
                id="customHooksTip"
                value={formData.customHooksSection.tip}
                onChange={(e) =>
                  handleChange(e, "customHooksSection", null, "tip")
                }
                placeholder="Add a helpful tip about custom hooks..."
                className={styles.textarea}
                rows="3"
                required
              ></textarea>
            </div>
          </section>

          {/* Best Practices Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Best Practices</h2>

            {formData.bestPracticesList.map((practice, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>
                      Best Practice {index + 1}
                    </label>
                    <textarea
                      value={practice}
                      onChange={(e) =>
                        handleChange(e, "bestPracticesList", index)
                      }
                      placeholder="E.g., Only call Hooks at the top level - Don't call Hooks inside loops, conditions, or nested functions"
                      className={styles.textarea}
                      rows="2"
                      required={index < 5}
                    ></textarea>
                  </div>

                  {index > 4 && (
                    <button
                      type="button"
                      onClick={() => removeBestPracticeItem(index)}
                      className={styles.removeButton}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addBestPracticeItem}
              className={styles.addButton}
            >
              + Add Best Practice
            </button>
          </section>

          {/* Summary Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Summary</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="mainSummary" className={styles.label}>
                Main Summary
              </label>
              <textarea
                id="mainSummary"
                value={formData.summary.mainSummary}
                onChange={(e) =>
                  handleChange(e, "summary", null, "mainSummary")
                }
                placeholder="Summarize the key points of your article..."
                className={styles.textarea}
                rows="4"
                required
              ></textarea>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="additionalSummary" className={styles.label}>
                Additional Summary
              </label>
              <textarea
                id="additionalSummary"
                value={formData.summary.additionalSummary}
                onChange={(e) =>
                  handleChange(e, "summary", null, "additionalSummary")
                }
                placeholder="Add any additional concluding thoughts..."
                className={styles.textarea}
                rows="4"
                required
              ></textarea>
            </div>
          </section>

          {/* Next Lesson Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Next Lesson</h2>

            <div className={styles.inputGroup}>
              <label htmlFor="nextLessonTitle" className={styles.label}>
                Next Lesson Title
              </label>
              <input
                type="text"
                id="nextLessonTitle"
                value={formData.nextLesson.title}
                onChange={(e) => handleChange(e, "nextLesson", null, "title")}
                placeholder="E.g., Advanced React Hooks: useContext, useReducer, and useRef"
                className={styles.input}
                required
              />
            </div>
          </section>

          {/* Author Info Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Author Information</h2>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="authorName" className={styles.label}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="authorName"
                  value={formData.author.name}
                  onChange={(e) => handleChange(e, "author", null, "name")}
                  placeholder="E.g., Aaradhya Poudyal"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="authorTitle" className={styles.label}>
                  Your Title/Role
                </label>
                <input
                  type="text"
                  id="authorTitle"
                  value={formData.author.title}
                  onChange={(e) => handleChange(e, "author", null, "title")}
                  placeholder="E.g., React Specialist and Course Creator"
                  className={styles.input}
                  required
                />
              </div>
            </div>
          </section>

          {/* Related Articles Section */}
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Related Articles</h2>

            {formData.relatedArticles.map((article, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>
                      Related Article {index + 1}
                    </label>
                    <input
                      type="text"
                      value={article}
                      onChange={(e) =>
                        handleChange(e, "relatedArticles", index)
                      }
                      placeholder="E.g., State Management Patterns in React"
                      className={styles.input}
                      required={index < 3}
                    />
                  </div>

                  {index > 2 && (
                    <button
                      type="button"
                      onClick={() => removeRelatedArticle(index)}
                      className={styles.removeButton}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addRelatedArticle}
              className={styles.addButton}
            >
              + Add Related Article
            </button>
          </section>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <button
              type="button"
              onClick={previewArticle}
              className={styles.previewButton}
            >
              Preview Article
            </button>
            <button type="submit" className={styles.submitButton}>
              Submit Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContributePage;
