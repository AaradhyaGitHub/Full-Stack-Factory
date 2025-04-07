import reactLanding from './graphics/reactLanding.png'
import jsLanding from './graphics/jsLanding.jpg'
import dsaLanding from './graphics/dsaLanding.png'

export const LandingPageData = [
  {
    id: "react_section",
    title: "React.js Toolkits",
    description:
      "Learn React.js by mastering small systems that make up web apps. Dive into hooks, components, state management, and more.",
    image: reactLanding,
    unitCount: 10,
    lessonCount: 50, // Approximate number of lessons
    difficultyLevel: "Intermediate",
    author: "Aaradhya Poudyal",
    date: "April 6 2025",
    units: [
      {
        id: "unit-1",
        title: "Intro to React.js",
        topicsCovered: [
          "JSX Syntax",
          "React Components",
          "useState Hook",
          "Functional Components",
          "Component-based Architecture",
          "Props",
          "Rendering in React"
        ]
      },
      {
        id: "unit-2",
        title: "Advanced useState",
        topicsCovered: [
          "Handling User Input",
          "State and Event Handlers",
          "Conditional Rendering",
          "State Management in Forms",
          "Custom Hooks"
        ]
      },
      {
        id: "unit-3",
        title: "React Router",
        topicsCovered: [
          "Setting Up React Router",
          "Nested Routes",
          "Linking Between Pages",
          "Dynamic Routing",
          "Routing with Parameters"
        ]
      },
      {
        id: "unit-4",
        title: "useEffect and Lifecycle",
        topicsCovered: [
          "useEffect Hook Basics",
          "Component Lifecycle",
          "Fetching Data on Load",
          "Cleaning Up Effects"
        ]
      },
      {
        id: "unit-5",
        title: "State Management in React",
        topicsCovered: [
          "useContext Hook",
          "Prop Drilling",
          "Redux for State Management",
          "Actions and Reducers"
        ]
      },
      {
        id: "unit-6",
        title: "Hooks and Custom Hooks",
        topicsCovered: [
          "Creating Custom Hooks",
          "Reusing Logic with Hooks",
          "useRef Hook",
          "useMemo and useCallback"
        ]
      },
      {
        id: "unit-7",
        title: "React Forms and Validation",
        topicsCovered: [
          "Controlled Components",
          "Form Validation",
          "Handling User Input",
          "React Hook Form"
        ]
      },
      {
        id: "unit-8",
        title: "Error Boundaries and Debugging",
        topicsCovered: [
          "Handling Errors in React",
          "Error Boundaries",
          "Debugging React Applications"
        ]
      },
      {
        id: "unit-9",
        title: "React Performance Optimization",
        topicsCovered: [
          "React.memo",
          "useMemo and useCallback",
          "Virtual DOM",
          "Lazy Loading and Code Splitting"
        ]
      },
      {
        id: "unit-10",
        title: "Testing in React",
        topicsCovered: [
          "Jest and Enzyme",
          "Testing Components",
          "Mocking API Calls",
          "Test-Driven Development in React"
        ]
      }
    ]
  },
  {
    id: "js_section",
    title: "JavaScript Essentials",
    description:
      "Master JavaScript from scratch: learn about DOM manipulation, asynchronous programming, data structures, and more.",
    image: jsLanding,
    unitCount: 10,
    lessonCount: 50, // Approximate number of lessons
    difficultyLevel: "Beginner to Intermediate",
    author: "Aaradhya Poudyal",
    date: "April 6 2025",
    units: [
      {
        id: "unit-1",
        title: "Intro to JavaScript",
        topicsCovered: [
          "JavaScript Syntax",
          "Variables and Data Types",
          "Functions",
          "Loops and Conditionals",
          "DOM Manipulation"
        ]
      },
      {
        id: "unit-2",
        title: "Arrays in JavaScript",
        topicsCovered: [
          "Array Methods",
          "forEach, map, filter, reduce",
          "Multidimensional Arrays",
          "Array Sorting"
        ]
      },
      {
        id: "unit-3",
        title: "Objects and Functions",
        topicsCovered: [
          "Objects in JavaScript",
          "Creating Functions",
          "Arrow Functions",
          "Destructuring"
        ]
      },
      {
        id: "unit-4",
        title: "ES6 Features",
        topicsCovered: [
          "let and const",
          "Template Literals",
          "Destructuring and Spread",
          "Async/Await",
          "Promises"
        ]
      },
      {
        id: "unit-5",
        title: "Asynchronous Programming",
        topicsCovered: [
          "Callbacks",
          "Promises",
          "Async/Await",
          "Error Handling"
        ]
      },
      {
        id: "unit-6",
        title: "DOM Manipulation and Events",
        topicsCovered: [
          "DOM Selection",
          "Adding/Removing Elements",
          "Event Listeners",
          "Event Delegation"
        ]
      },
      {
        id: "unit-7",
        title: "JavaScript and the Web",
        topicsCovered: [
          "HTTP Requests and Fetch API",
          "Working with APIs",
          "AJAX and JSON"
        ]
      },
      {
        id: "unit-8",
        title: "JavaScript Design Patterns",
        topicsCovered: [
          "Module Pattern",
          "Factory Pattern",
          "Singleton Pattern",
          "Observer Pattern"
        ]
      },
      {
        id: "unit-9",
        title: "Error Handling and Debugging",
        topicsCovered: ["try/catch", "Debugging with Console", "Error Objects"]
      },
      {
        id: "unit-10",
        title: "JavaScript Testing",
        topicsCovered: [
          "Unit Testing with Jest",
          "Mocking Functions",
          "Test Coverage",
          "TDD (Test Driven Development)"
        ]
      }
    ]
  },
  {
    id: "cpp_dsa_section",
    title: "C/C++ Data Structures and Algorithms",
    description:
      "Master the fundamentals of C/C++ with focus on data structures, algorithms, and problem-solving techniques.",
    image: dsaLanding,
    unitCount: 10,
    lessonCount: 50, // Approximate number of lessons
    difficultyLevel: "Advanced",
    author: "Aaradhya Poudyal",
    date: "April 6 2025",
    units: [
      {
        id: "unit-1",
        title: "Intro to C/C++",
        topicsCovered: [
          "C/C++ Syntax",
          "Variables and Data Types",
          "Input/Output in C++",
          "Basic Functions"
        ]
      },
      {
        id: "unit-2",
        title: "Arrays and Strings",
        topicsCovered: [
          "1D Arrays",
          "2D Arrays",
          "String Manipulation",
          "String Functions"
        ]
      },
      {
        id: "unit-3",
        title: "Pointers and Memory Management",
        topicsCovered: [
          "Pointers in C/C++",
          "Dynamic Memory Allocation",
          "Memory Management with malloc/free"
        ]
      },
      {
        id: "unit-4",
        title: "Linked Lists",
        topicsCovered: [
          "Singly Linked Lists",
          "Doubly Linked Lists",
          "Circular Linked Lists",
          "Linked List Operations"
        ]
      },
      {
        id: "unit-5",
        title: "Stacks and Queues",
        topicsCovered: [
          "Implementation of Stacks",
          "Stacks in C++",
          "Queues and Dequeues",
          "Circular Queue Implementation"
        ]
      },
      {
        id: "unit-6",
        title: "Trees and Graphs",
        topicsCovered: [
          "Binary Trees",
          "Tree Traversal",
          "Graph Representation",
          "Graph Traversal"
        ]
      },
      {
        id: "unit-7",
        title: "Sorting Algorithms",
        topicsCovered: [
          "Bubble Sort",
          "Quick Sort",
          "Merge Sort",
          "Insertion Sort",
          "Selection Sort"
        ]
      },
      {
        id: "unit-8",
        title: "Searching Algorithms",
        topicsCovered: ["Linear Search", "Binary Search", "Searching in Trees"]
      },
      {
        id: "unit-9",
        title: "Dynamic Programming",
        topicsCovered: [
          "Fibonacci Sequence",
          "Knapsack Problem",
          "Longest Common Subsequence"
        ]
      },
      {
        id: "unit-10",
        title: "Advanced Data Structures",
        topicsCovered: [
          "Trie Data Structure",
          "Segment Tree",
          "Graph Algorithms",
          "Disjoint Set Union"
        ]
      }
    ]
  }
];
