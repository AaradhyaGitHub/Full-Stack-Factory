// Article.jsx
import React from "react";
import styles from "./Article.module.css";

const Article = () => {
  return (
    <article className={styles.article}>
      <header className={styles.articleHeader}>
        <h1 className={styles.articleTitle}>
          Understanding React Hooks: A Comprehensive Guide
        </h1>

        <div className={styles.articleMeta}>
          <span className={styles.articleDate}>April 6, 2025</span>
          <span className={styles.articleReadTime}>12 min read</span>
          <span className={styles.articleCategory}>React Fundamentals</span>
        </div>
      </header>

      <figure className={styles.articleHeroImage}>
        <img src="/api/placeholder/1200/600" alt="React Hooks Illustration" />
        <figcaption>
          React Hooks provide a simpler way to manage state and side effects in
          functional components
        </figcaption>
      </figure>

      <div className={styles.tableOfContents}>
        <h2 className={styles.tocTitle}>Table of Contents</h2>
        <ul className={styles.tocList}>
          <li>
            <a href="#introduction">Introduction to React Hooks</a>
          </li>
          <li>
            <a href="#why-hooks">Why Hooks Matter</a>
          </li>
          <li>
            <a href="#useState">useState Hook</a>
          </li>
          <li>
            <a href="#useEffect">useEffect Hook</a>
          </li>
          <li>
            <a href="#custom-hooks">Building Custom Hooks</a>
          </li>
          <li>
            <a href="#best-practices">Best Practices</a>
          </li>
        </ul>
      </div>

      <section id="introduction" className={styles.articleSection}>
        <h2>Introduction to React Hooks</h2>
        <p>
          React Hooks were introduced in React 16.8 as a way to use state and
          other React features without writing a class. They allow you to "hook
          into" React state and lifecycle features from function components,
          enabling a more functional programming style.
        </p>
        <p>
          Before Hooks, developers had to convert functional components to class
          components whenever they needed state or lifecycle methods. With
          Hooks, there's no more switching back and forth between function and
          class components.
        </p>

        <div className={styles.highlightBox}>
          <h3>Important Concept</h3>
          <p>
            Hooks don't work inside classes — they let you use React without
            classes. They are completely opt-in and 100% backwards-compatible.
          </p>
        </div>
      </section>

      <section id="why-hooks" className={styles.articleSection}>
        <h2>Why Hooks Matter</h2>
        <p>
          Hooks solve several problems that developers have encountered over the
          years with class components and React's component model:
        </p>

        <ul className={styles.featureList}>
          <li>
            <strong>Reusing stateful logic</strong> - Hooks make it possible to
            extract and reuse stateful logic without changing your component
            hierarchy
          </li>
          <li>
            <strong>Complex components</strong> - Hooks let you split one
            component into smaller functions based on related pieces, rather
            than forcing artificial splits
          </li>
          <li>
            <strong>Confusing classes</strong> - Classes can be a barrier to
            learning React, and this is now eliminated with functional
            components and Hooks
          </li>
        </ul>
      </section>

      <hr className={styles.divider} />

      <section id="useState" className={styles.articleSection}>
        <h2>useState Hook</h2>
        <p>
          The <code>useState</code> Hook is the most fundamental Hook in React.
          It enables state management in functional components by providing a
          way to declare state variables.
        </p>

        <div className={styles.codeBlock}>
          <pre>
            <code>
              {`const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
}`}
            </code>
          </pre>
        </div>

        <p>
          In this example, <code>useState</code> returns a pair: the current
          state value (<code>count</code>) and a function that lets you update
          it (<code>setCount</code>). The argument passed to
          <code>useState</code> is the initial state value.
        </p>

        <div className={styles.noteCard}>
          <h4>Note</h4>
          <p>
            Unlike <code>this.setState</code> in a class component, updating a
            state variable with its setter function always replaces the previous
            value instead of merging it.
          </p>
        </div>
      </section>

      <section id="useEffect" className={styles.articleSection}>
        <h2>useEffect Hook</h2>
        <p>
          The <code>useEffect</code> Hook lets you perform side effects in
          function components. Side effects could be data fetching,
          subscriptions, or manually changing the DOM.
        </p>

        <div className={styles.imageWithCaption}>
          <img src="/api/placeholder/800/400" alt="useEffect lifecycle" />
          <figcaption>
            The lifecycle of useEffect: component mounts, updates, and unmounts
          </figcaption>
        </div>

        <p>
          If you're familiar with React class lifecycle methods, you can think
          of
          <code>useEffect</code> as <code>componentDidMount</code>,{" "}
          <code>componentDidUpdate</code>, and
          <code>componentWillUnmount</code> combined.
        </p>

        <h3>Controlling When Effects Run</h3>
        <p>
          By default, <code>useEffect</code> runs after every completed render.
          However, you can optimize performance by having it skip effects if
          certain values haven't changed.
        </p>

        <div className={styles.codeBlock}>
          <pre>
            <code>
              {`useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]); // Only re-run the effect if count changes`}
            </code>
          </pre>
        </div>
      </section>

      <section className={styles.comparisonSection}>
        <h2>Class Components vs Hooks</h2>
        <div className={styles.comparisonTable}>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Class Components</th>
                <th>Hooks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>State Management</td>
                <td>Using this.state and this.setState</td>
                <td>Using useState hook</td>
              </tr>
              <tr>
                <td>Lifecycle Methods</td>
                <td>componentDidMount, componentDidUpdate, etc.</td>
                <td>Using useEffect hook</td>
              </tr>
              <tr>
                <td>Code Organization</td>
                <td>Lifecycle methods split related code</td>
                <td>Hooks keep related code together</td>
              </tr>
              <tr>
                <td>Reusing Logic</td>
                <td>HOCs and render props (complex)</td>
                <td>Custom hooks (simpler)</td>
              </tr>
              <tr>
                <td>Learning Curve</td>
                <td>Must understand "this" binding</td>
                <td>Uses familiar JavaScript closures</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="custom-hooks" className={styles.articleSection}>
        <h2>Building Custom Hooks</h2>
        <p>
          One of the best features of Hooks is the ability to create your own
          custom Hooks, allowing you to extract component logic into reusable
          functions.
        </p>

        <div className={styles.codeBlock}>
          <pre>
            <code>
              {`// Custom Hook for form handling
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return {
    value,
    onChange: handleChange
  };
}`}
            </code>
          </pre>
        </div>

        <p>
          Custom Hooks let you share stateful logic without changing your
          component hierarchy. This reduces duplicate code and makes your
          components cleaner.
        </p>

        <div className={styles.tipCard}>
          <h4>Pro Tip</h4>
          <p>
            Custom Hook names should always start with "use" to signal to React
            that it follows the rules of Hooks. This naming convention is also
            used by linting tools to find bugs in your code.
          </p>
        </div>
      </section>

      <hr className={styles.divider} />

      <section id="best-practices" className={styles.articleSection}>
        <h2>Best Practices</h2>
        <p>When working with React Hooks, keep these best practices in mind:</p>

        <ol className={styles.numberedList}>
          <li>
            <strong>Only call Hooks at the top level</strong> - Don't call Hooks
            inside loops, conditions, or nested functions
          </li>
          <li>
            <strong>Only call Hooks from React function components</strong> -
            Don't call Hooks from regular JavaScript functions
          </li>
          <li>
            <strong>Use multiple state variables</strong> - Split state logic
            into multiple hooks based on which values tend to change together
          </li>
          <li>
            <strong>Optimize render performance</strong> - Use the dependency
            array in useEffect to avoid unnecessary re-renders
          </li>
          <li>
            <strong>Extract complex logic to custom hooks</strong> - When a
            component gets too complex, consider extracting some logic into
            custom hooks
          </li>
        </ol>
      </section>

      <section className={styles.summarySection}>
        <h2>Summary</h2>
        <p>
          React Hooks represent a paradigm shift in how we build React
          components. They enable functional programming patterns, better code
          organization, and more reusable logic. By mastering Hooks, you'll
          write more concise and maintainable React code.
        </p>
        <p>
          In this guide, we've covered the basics of React Hooks, focusing on
          the two most commonly used ones: useState and useEffect. We've also
          looked at creating custom Hooks and best practices to follow when
          using Hooks in your applications.
        </p>

        <div className={styles.nextLessonCard}>
          <h3>Next Lesson</h3>
          <p>Advanced React Hooks: useContext, useReducer, and useRef</p>
          <button className={styles.nextButton}>Continue Learning</button>
        </div>
      </section>

      <footer className={styles.articleFooter}>
        <div className={styles.authorCard}>
          <div className={styles.authorAvatar}>
            <span>A</span>
          </div>
          <div className={styles.authorInfo}>
            <h4>Aaradhya Poudyal</h4>
            <p>React Specialist and Course Creator</p>
          </div>
        </div>

        <div className={styles.relatedArticles}>
          <h3>Related Articles</h3>
          <ul>
            <li>
              <a href="#">State Management Patterns in React</a>
            </li>
            <li>
              <a href="#">React Performance Optimization</a>
            </li>
            <li>
              <a href="#">Building a React Component Library</a>
            </li>
          </ul>
        </div>

        <div className={styles.shareBtns}>
          <button className={styles.shareBtn}>Share on Twitter</button>
          <button className={styles.shareBtn}>Copy Link</button>
        </div>
      </footer>
    </article>
  );
};

export default Article;
