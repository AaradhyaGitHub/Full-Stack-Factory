import javaScriptImg from "./assets/1.png";
import dsaJmg from "./assets/3.png";
import reactImg from "./assets/2.png";

export const CORE_CONCEPTS = [
  {
    image: javaScriptImg,
    title: "javaScript",
    description: "Coming soon..."
  },
  {
    image: reactImg,
    title: "React.js",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them."
  },
  {
    image: dsaJmg,
    title: "C/C++ DSA",
    description: "coming soon..."
  }
];

export const EXAMPLES = {
  javaScript: {
    title: "javaScript",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`
  },
  dsa: {
    title: "DSA",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`
  },
  react: {
    title: "React.js",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`
  }
};
