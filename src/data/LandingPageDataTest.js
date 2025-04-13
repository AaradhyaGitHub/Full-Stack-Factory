import reactLanding from "./graphics/reactLanding.png";
import jsLanding from "./graphics/jsLanding.jpg";
import dsaLanding from "./graphics/dsaLanding.png";

export const LandingPageDataTest = [
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
          {
            lessonId: "r1-1",
            lessonTitle: "JSX Syntax",
            lessonArticles: [
              "What is JSX?",
              "JSX vs HTML: Key Differences",
              "Building UI Components with JSX"
            ]
          },
          {
            lessonId: "r1-2",
            lessonTitle: "React Components",
            lessonArticles: [
              "Functional vs Class Components",
              "Component Composition Patterns",
              "Building Your First React Component"
            ]
          },
          {
            lessonId: "r1-3",
            lessonTitle: "useState Hook",
            lessonArticles: [
              "Introduction to React Hooks",
              "Managing State with useState",
              "Building a Counter Application"
            ]
          },
          {
            lessonId: "r1-4",
            lessonTitle: "Functional Components",
            lessonArticles: [
              "Moving from Class to Functional Components",
              "Best Practices for Functional Components",
              "Advanced Patterns for Functional Components"
            ]
          },
          {
            lessonId: "r1-5",
            lessonTitle: "Component-based Architecture",
            lessonArticles: [
              "Understanding Component-Based Design",
              "Creating Reusable Component Libraries",
              "Atomic Design in React Applications"
            ]
          },
          {
            lessonId: "r1-6",
            lessonTitle: "Props",
            lessonArticles: [
              "Passing Data with Props",
              "PropTypes and Type Checking",
              "Default Props and Optional Props"
            ]
          },
          {
            lessonId: "r1-7",
            lessonTitle: "Rendering in React",
            lessonArticles: [
              "The React Rendering Process",
              "Optimizing Renders in React",
              "Conditional Rendering Techniques"
            ]
          }
        ]
      },
      {
        id: "unit-2",
        title: "Advanced useState",
        topicsCovered: [
          {
            lessonId: "r2-1",
            lessonTitle: "Handling User Input",
            lessonArticles: [
              "Controlled vs Uncontrolled Inputs",
              "Form Validation Strategies",
              "Building Custom Input Components"
            ]
          },
          {
            lessonId: "r2-2",
            lessonTitle: "State and Event Handlers",
            lessonArticles: [
              "Event Handling Best Practices",
              "Updating State from Events",
              "Managing Complex Event Chains"
            ]
          },
          {
            lessonId: "r2-3",
            lessonTitle: "Conditional Rendering",
            lessonArticles: [
              "Techniques for Conditional UI",
              "Performance Considerations in Conditionals",
              "Building a Multi-Step Form"
            ]
          },
          {
            lessonId: "r2-4",
            lessonTitle: "State Management in Forms",
            lessonArticles: [
              "Single vs Multiple State Variables",
              "Form Libraries vs Raw React",
              "Building a Dynamic Form Builder"
            ]
          },
          {
            lessonId: "r2-5",
            lessonTitle: "Custom Hooks",
            lessonArticles: [
              "Creating Your First Custom Hook",
              "Reusable Logic with Custom Hooks",
              "Building a useForm Hook"
            ]
          }
        ]
      },
      {
        id: "unit-3",
        title: "React Router",
        topicsCovered: [
          {
            lessonId: "r3-1",
            lessonTitle: "Setting Up React Router",
            lessonArticles: [
              "React Router Installation and Setup",
              "Configuring Route Components",
              "Building a Navigation System"
            ]
          },
          {
            lessonId: "r3-2",
            lessonTitle: "Nested Routes",
            lessonArticles: [
              "Working with Nested Routes",
              "Parent-Child Route Relationships",
              "Creating a Multi-Level Navigation"
            ]
          },
          {
            lessonId: "r3-3",
            lessonTitle: "Linking Between Pages",
            lessonArticles: [
              "Using Link and NavLink Components",
              "Programmatic Navigation in React",
              "Building a Breadcrumb Component"
            ]
          },
          {
            lessonId: "r3-4",
            lessonTitle: "Dynamic Routing",
            lessonArticles: [
              "Using URL Parameters",
              "Optional and Required Parameters",
              "Creating a Product Catalog with Dynamic Routes"
            ]
          },
          {
            lessonId: "r3-5",
            lessonTitle: "Routing with Parameters",
            lessonArticles: [
              "Extracting and Using Route Parameters",
              "Query Parameters vs Route Parameters",
              "Building a Blog with Dynamic Routes"
            ]
          }
        ]
      },
      {
        id: "unit-4",
        title: "useEffect and Lifecycle",
        topicsCovered: [
          {
            lessonId: "r4-1",
            lessonTitle: "useEffect Hook Basics",
            lessonArticles: [
              "Introduction to Side Effects in React",
              "useEffect Dependency Array",
              "Managing Multiple Effects"
            ]
          },
          {
            lessonId: "r4-2",
            lessonTitle: "Component Lifecycle",
            lessonArticles: [
              "From Lifecycle Methods to Hooks",
              "Simulating componentDidMount",
              "Cleanup Functions in useEffect"
            ]
          },
          {
            lessonId: "r4-3",
            lessonTitle: "Fetching Data on Load",
            lessonArticles: [
              "API Calls with useEffect",
              "Loading States and Error Handling",
              "Building a Data Dashboard"
            ]
          },
          {
            lessonId: "r4-4",
            lessonTitle: "Cleaning Up Effects",
            lessonArticles: [
              "Preventing Memory Leaks",
              "Subscription Management",
              "Cleanup Pattern for Different Effect Types"
            ]
          }
        ]
      },
      {
        id: "unit-5",
        title: "State Management in React",
        topicsCovered: [
          {
            lessonId: "r5-1",
            lessonTitle: "useContext Hook",
            lessonArticles: [
              "Creating and Using Context",
              "Context vs Props for Data Flow",
              "Building a Theme Switcher with Context"
            ]
          },
          {
            lessonId: "r5-2",
            lessonTitle: "Prop Drilling",
            lessonArticles: [
              "Understanding the Prop Drilling Problem",
              "Solutions to Avoid Prop Drilling",
              "Refactoring a Component Tree"
            ]
          },
          {
            lessonId: "r5-3",
            lessonTitle: "Redux for State Management",
            lessonArticles: [
              "Redux Core Concepts",
              "Setting Up Redux with React",
              "Building a Todo App with Redux"
            ]
          },
          {
            lessonId: "r5-4",
            lessonTitle: "Actions and Reducers",
            lessonArticles: [
              "Creating Action Creators",
              "Reducer Patterns and Best Practices",
              "Combining Multiple Reducers"
            ]
          }
        ]
      },
      {
        id: "unit-6",
        title: "Hooks and Custom Hooks",
        topicsCovered: [
          {
            lessonId: "r6-1",
            lessonTitle: "Creating Custom Hooks",
            lessonArticles: [
              "Custom Hook Design Principles",
              "Extracting Logic into Hooks",
              "Building a useLocalStorage Hook"
            ]
          },
          {
            lessonId: "r6-2",
            lessonTitle: "Reusing Logic with Hooks",
            lessonArticles: [
              "Shareable Logic Patterns",
              "Composition of Multiple Hooks",
              "Building a Data Fetching Hook"
            ]
          },
          {
            lessonId: "r6-3",
            lessonTitle: "useRef Hook",
            lessonArticles: [
              "Understanding Reference vs State",
              "DOM Access with useRef",
              "Creating a Clickable Canvas Component"
            ]
          },
          {
            lessonId: "r6-4",
            lessonTitle: "useMemo and useCallback",
            lessonArticles: [
              "Understanding Memoization in React",
              "Performance Optimization with useMemo",
              "Creating Stable Callbacks for Child Components"
            ]
          }
        ]
      },
      {
        id: "unit-7",
        title: "React Forms and Validation",
        topicsCovered: [
          {
            lessonId: "r7-1",
            lessonTitle: "Controlled Components",
            lessonArticles: [
              "State-Driven Form Inputs",
              "Handling Multiple Input Types",
              "Building a Dynamic Form"
            ]
          },
          {
            lessonId: "r7-2",
            lessonTitle: "Form Validation",
            lessonArticles: [
              "Client-Side Validation Strategies",
              "Real-Time Validation Feedback",
              "Building a Registration Form with Validation"
            ]
          },
          {
            lessonId: "r7-3",
            lessonTitle: "Handling User Input",
            lessonArticles: [
              "Input Change Optimization",
              "Debouncing and Throttling Input",
              "Creating an Auto-Complete Component"
            ]
          },
          {
            lessonId: "r7-4",
            lessonTitle: "React Hook Form",
            lessonArticles: [
              "Introduction to React Hook Form",
              "Form Validation with Yup",
              "Building a Multi-Step Checkout Form"
            ]
          }
        ]
      },
      {
        id: "unit-8",
        title: "Error Boundaries and Debugging",
        topicsCovered: [
          {
            lessonId: "r8-1",
            lessonTitle: "Handling Errors in React",
            lessonArticles: [
              "Common React Error Patterns",
              "Try/Catch in React Components",
              "Creating a Global Error Handler"
            ]
          },
          {
            lessonId: "r8-2",
            lessonTitle: "Error Boundaries",
            lessonArticles: [
              "Implementing Error Boundary Components",
              "Fallback UI Strategies",
              "Building a Robust Error Handling System"
            ]
          },
          {
            lessonId: "r8-3",
            lessonTitle: "Debugging React Applications",
            lessonArticles: [
              "React DevTools Essentials",
              "Common Debugging Techniques",
              "Creating Custom Debugging Hooks"
            ]
          }
        ]
      },
      {
        id: "unit-9",
        title: "React Performance Optimization",
        topicsCovered: [
          {
            lessonId: "r9-1",
            lessonTitle: "React.memo",
            lessonArticles: [
              "Preventing Unnecessary Renders",
              "Custom Comparison Functions",
              "When and When Not to Use React.memo"
            ]
          },
          {
            lessonId: "r9-2",
            lessonTitle: "useMemo and useCallback",
            lessonArticles: [
              "Optimizing Expensive Calculations",
              "Stabilizing Props with useCallback",
              "Building a Data Grid with Optimized Sorting"
            ]
          },
          {
            lessonId: "r9-3",
            lessonTitle: "Virtual DOM",
            lessonArticles: [
              "How Virtual DOM Works",
              "Reconciliation Process",
              "Keys and Optimizing List Rendering"
            ]
          },
          {
            lessonId: "r9-4",
            lessonTitle: "Lazy Loading and Code Splitting",
            lessonArticles: [
              "Implementing React.lazy",
              "Route-Based Code Splitting",
              "Building a Performance-Optimized SPA"
            ]
          }
        ]
      },
      {
        id: "unit-10",
        title: "Testing in React",
        topicsCovered: [
          {
            lessonId: "r10-1",
            lessonTitle: "Jest and Enzyme",
            lessonArticles: [
              "Setting Up Testing Environment",
              "Writing Your First Component Test",
              "Snapshot Testing Techniques"
            ]
          },
          {
            lessonId: "r10-2",
            lessonTitle: "Testing Components",
            lessonArticles: [
              "Testing Component Props",
              "Testing User Interactions",
              "Testing Component Lifecycle"
            ]
          },
          {
            lessonId: "r10-3",
            lessonTitle: "Mocking API Calls",
            lessonArticles: [
              "Mocking Fetch and Axios",
              "Testing Asynchronous Components",
              "Setting Up Mock API Servers"
            ]
          },
          {
            lessonId: "r10-4",
            lessonTitle: "Test-Driven Development in React",
            lessonArticles: [
              "TDD Workflow for React",
              "Red-Green-Refactor Cycle",
              "Building a Feature Using TDD"
            ]
          }
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
          {
            lessonId: "js1-1",
            lessonTitle: "JavaScript Syntax",
            lessonArticles: [
              "JavaScript Basics for Beginners",
              "Understanding JavaScript Syntax",
              "Common Syntax Patterns in JS"
            ]
          },
          {
            lessonId: "js1-2",
            lessonTitle: "Variables and Data Types",
            lessonArticles: [
              "Primitive vs Reference Types",
              "Working with Strings and Numbers",
              "Type Coercion in JavaScript"
            ]
          },
          {
            lessonId: "js1-3",
            lessonTitle: "Functions",
            lessonArticles: [
              "Function Declaration vs Expression",
              "Arrow Functions in Modern JS",
              "Higher-Order Functions Explained"
            ]
          },
          {
            lessonId: "js1-4",
            lessonTitle: "Loops and Conditionals",
            lessonArticles: [
              "Mastering If-Else Statements",
              "Loop Types and When to Use Them",
              "Switch Statements and Ternary Operators"
            ]
          },
          {
            lessonId: "js1-5",
            lessonTitle: "DOM Manipulation",
            lessonArticles: [
              "Selecting and Modifying DOM Elements",
              "Creating Dynamic Content with JS",
              "Event Handling Fundamentals"
            ]
          }
        ]
      },
      {
        id: "unit-2",
        title: "Arrays in JavaScript",
        topicsCovered: [
          {
            lessonId: "js2-1",
            lessonTitle: "Array Methods",
            lessonArticles: [
              "Essential Array Methods for Beginners",
              "Mutating vs Non-Mutating Methods",
              "Building a Data Processor with Array Methods"
            ]
          },
          {
            lessonId: "js2-2",
            lessonTitle: "forEach, map, filter, reduce",
            lessonArticles: [
              "Transforming Data with map()",
              "Filtering Collections Effectively",
              "Advanced Reduction Techniques"
            ]
          },
          {
            lessonId: "js2-3",
            lessonTitle: "Multidimensional Arrays",
            lessonArticles: [
              "Working with Nested Arrays",
              "Matrix Operations in JavaScript",
              "Building a Grid-Based Game"
            ]
          },
          {
            lessonId: "js2-4",
            lessonTitle: "Array Sorting",
            lessonArticles: [
              "Custom Sort Functions",
              "Stable vs Unstable Sorting",
              "Sorting Complex Data Structures"
            ]
          }
        ]
      },
      {
        id: "unit-3",
        title: "Objects and Functions",
        topicsCovered: [
          {
            lessonId: "js3-1",
            lessonTitle: "Objects in JavaScript",
            lessonArticles: [
              "Object Creation Patterns",
              "Property Descriptors and Accessors",
              "Object Manipulation Techniques"
            ]
          },
          {
            lessonId: "js3-2",
            lessonTitle: "Creating Functions",
            lessonArticles: [
              "Function Parameters and Arguments",
              "Function Scope and Closures",
              "IIFE and Factory Functions"
            ]
          },
          {
            lessonId: "js3-3",
            lessonTitle: "Arrow Functions",
            lessonArticles: [
              "Arrow Function Syntax in Depth",
              "this Binding in Different Functions",
              "When Not to Use Arrow Functions"
            ]
          },
          {
            lessonId: "js3-4",
            lessonTitle: "Destructuring",
            lessonArticles: [
              "Object Destructuring Techniques",
              "Array Destructuring Patterns",
              "Using Destructuring in Function Parameters"
            ]
          }
        ]
      },
      {
        id: "unit-4",
        title: "ES6 Features",
        topicsCovered: [
          {
            lessonId: "js4-1",
            lessonTitle: "let and const",
            lessonArticles: [
              "Block Scope vs Function Scope",
              "const and Object Mutability",
              "Best Practices for Variable Declarations"
            ]
          },
          {
            lessonId: "js4-2",
            lessonTitle: "Template Literals",
            lessonArticles: [
              "String Interpolation Techniques",
              "Multiline Strings with Template Literals",
              "Tagged Templates for Custom Formatting"
            ]
          },
          {
            lessonId: "js4-3",
            lessonTitle: "Destructuring and Spread",
            lessonArticles: [
              "Advanced Destructuring Patterns",
              "Spread vs Rest Operator",
              "Immutable Updates with Spread"
            ]
          },
          {
            lessonId: "js4-4",
            lessonTitle: "Async/Await",
            lessonArticles: [
              "From Promises to Async/Await",
              "Error Handling with Try/Catch",
              "Sequential vs Parallel Execution"
            ]
          },
          {
            lessonId: "js4-5",
            lessonTitle: "Promises",
            lessonArticles: [
              "Promise Creation and Chaining",
              "Promise.all and Promise.race",
              "Converting Callbacks to Promises"
            ]
          }
        ]
      },
      {
        id: "unit-5",
        title: "Asynchronous Programming",
        topicsCovered: [
          {
            lessonId: "js5-1",
            lessonTitle: "Callbacks",
            lessonArticles: [
              "Callback Function Basics",
              "Avoiding Callback Hell",
              "Event-Driven Programming with Callbacks"
            ]
          },
          {
            lessonId: "js5-2",
            lessonTitle: "Promises",
            lessonArticles: [
              "Understanding the Promise Lifecycle",
              "Promise Composition Techniques",
              "Building a Promise-Based API Client"
            ]
          },
          {
            lessonId: "js5-3",
            lessonTitle: "Async/Await",
            lessonArticles: [
              "Writing Cleaner Asynchronous Code",
              "Async Functions and Error Handling",
              "Implementing Retry Logic with Async/Await"
            ]
          },
          {
            lessonId: "js5-4",
            lessonTitle: "Error Handling",
            lessonArticles: [
              "Error Types and Custom Errors",
              "Global Error Handling Strategies",
              "Debugging Asynchronous Code"
            ]
          }
        ]
      },
      {
        id: "unit-6",
        title: "DOM Manipulation and Events",
        topicsCovered: [
          {
            lessonId: "js6-1",
            lessonTitle: "DOM Selection",
            lessonArticles: [
              "querySelector vs getElementsBy Methods",
              "Traversing the DOM Tree",
              "Performance Considerations in DOM Selection"
            ]
          },
          {
            lessonId: "js6-2",
            lessonTitle: "Adding/Removing Elements",
            lessonArticles: [
              "Dynamic DOM Manipulation Techniques",
              "Fragment-Based DOM Updates",
              "Building a Dynamic List Component"
            ]
          },
          {
            lessonId: "js6-3",
            lessonTitle: "Event Listeners",
            lessonArticles: [
              "Event Types and Handlers",
              "The Event Object in Depth",
              "Creating Custom Event Systems"
            ]
          },
          {
            lessonId: "js6-4",
            lessonTitle: "Event Delegation",
            lessonArticles: [
              "Event Bubbling and Capturing",
              "Efficient Event Handling with Delegation",
              "Building a Delegated Event System"
            ]
          }
        ]
      },
      {
        id: "unit-7",
        title: "JavaScript and the Web",
        topicsCovered: [
          {
            lessonId: "js7-1",
            lessonTitle: "HTTP Requests and Fetch API",
            lessonArticles: [
              "Making API Requests with Fetch",
              "Handling Response Data Types",
              "Building a RESTful API Client"
            ]
          },
          {
            lessonId: "js7-2",
            lessonTitle: "Working with APIs",
            lessonArticles: [
              "Authentication Methods for APIs",
              "Rate Limiting and Batching",
              "Creating a Weather App with Public APIs"
            ]
          },
          {
            lessonId: "js7-3",
            lessonTitle: "AJAX and JSON",
            lessonArticles: [
              "JSON Parsing and Stringifying",
              "Cross-Origin Requests and CORS",
              "Building a Dynamic Content Loader"
            ]
          }
        ]
      },
      {
        id: "unit-8",
        title: "JavaScript Design Patterns",
        topicsCovered: [
          {
            lessonId: "js8-1",
            lessonTitle: "Module Pattern",
            lessonArticles: [
              "ES Modules vs CommonJS",
              "IIFE Module Pattern",
              "Building a Modular Application"
            ]
          },
          {
            lessonId: "js8-2",
            lessonTitle: "Factory Pattern",
            lessonArticles: [
              "Object Factories in JavaScript",
              "Dynamic Object Creation",
              "Implementing a Widget Factory"
            ]
          },
          {
            lessonId: "js8-3",
            lessonTitle: "Singleton Pattern",
            lessonArticles: [
              "Creating Singletons in JS",
              "Use Cases for Singletons",
              "Building a Configuration Manager"
            ]
          },
          {
            lessonId: "js8-4",
            lessonTitle: "Observer Pattern",
            lessonArticles: [
              "Publishers and Subscribers",
              "Event Emitters Implementation",
              "Building a Reactive Data System"
            ]
          }
        ]
      },
      {
        id: "unit-9",
        title: "Error Handling and Debugging",
        topicsCovered: [
          {
            lessonId: "js9-1",
            lessonTitle: "try/catch",
            lessonArticles: [
              "Handling Exceptions in JavaScript",
              "try/catch with Async Functions",
              "Creating Robust Error Recovery Systems"
            ]
          },
          {
            lessonId: "js9-2",
            lessonTitle: "Debugging with Console",
            lessonArticles: [
              "Advanced Console Techniques",
              "Performance Monitoring with console.time",
              "Visual Debugging with console.table"
            ]
          },
          {
            lessonId: "js9-3",
            lessonTitle: "Error Objects",
            lessonArticles: [
              "Built-in Error Types",
              "Custom Error Classes",
              "Creating a Centralized Error Logger"
            ]
          }
        ]
      },
      {
        id: "unit-10",
        title: "JavaScript Testing",
        topicsCovered: [
          {
            lessonId: "js10-1",
            lessonTitle: "Unit Testing with Jest",
            lessonArticles: [
              "Setting Up Jest for JavaScript",
              "Writing Your First Test Suite",
              "Snapshot Testing for UI Components"
            ]
          },
          {
            lessonId: "js10-2",
            lessonTitle: "Mocking Functions",
            lessonArticles: [
              "Jest Mock Functions",
              "Mocking Modules and Dependencies",
              "Testing Functions with Side Effects"
            ]
          },
          {
            lessonId: "js10-3",
            lessonTitle: "Test Coverage",
            lessonArticles: [
              "Measuring Code Coverage",
              "Improving Test Coverage",
              "Setting Up Coverage Reports"
            ]
          },
          {
            lessonId: "js10-4",
            lessonTitle: "TDD (Test Driven Development)",
            lessonArticles: [
              "TDD Workflow in JavaScript",
              "Red-Green-Refactor Cycle",
              "Building a Feature Using TDD"
            ]
          }
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
          {
            lessonId: "cpp1-1",
            lessonTitle: "C/C++ Syntax",
            lessonArticles: [
              "C++ Fundamentals for Beginners",
              "Differences Between C and C++",
              "Creating Your First C++ Program"
            ]
          },
          {
            lessonId: "cpp1-2",
            lessonTitle: "Variables and Data Types",
            lessonArticles: [
              "Primitive Data Types in C++",
              "Type Casting and Conversions",
              "User-Defined Data Types"
            ]
          },
          {
            lessonId: "cpp1-3",
            lessonTitle: "Input/Output in C++",
            lessonArticles: [
              "Working with cin and cout",
              "File I/O Operations",
              "Formatting Output in C++"
            ]
          },
          {
            lessonId: "cpp1-4",
            lessonTitle: "Basic Functions",
            lessonArticles: [
              "Function Declaration and Definition",
              "Pass by Value vs Reference",
              "Function Overloading in C++"
            ]
          }
        ]
      },
      {
        id: "unit-2",
        title: "Arrays and Strings",
        topicsCovered: [
          {
            lessonId: "cpp2-1",
            lessonTitle: "1D Arrays",
            lessonArticles: [
              "Array Declaration and Initialization",
              "Array Traversal Techniques",
              "Common Array Algorithms"
            ]
          },
          {
            lessonId: "cpp2-2",
            lessonTitle: "2D Arrays",
            lessonArticles: [
              "Matrix Operations in C++",
              "Efficient 2D Array Traversal",
              "Building a Tic-Tac-Toe Game"
            ]
          },
          {
            lessonId: "cpp2-3",
            lessonTitle: "String Manipulation",
            lessonArticles: [
              "C-Style Strings vs std::string",
              "String Processing Algorithms",
              "Building a Text Parser"
            ]
          },
          {
            lessonId: "cpp2-4",
            lessonTitle: "String Functions",
            lessonArticles: [
              "Common String Library Functions",
              "Regular Expressions in C++",
              "Creating a String Utility Library"
            ]
          }
        ]
      },
      {
        id: "unit-3",
        title: "Pointers and Memory Management",
        topicsCovered: [
          {
            lessonId: "cpp3-1",
            lessonTitle: "Pointers in C/C++",
            lessonArticles: [
              "Understanding Memory Addresses",
              "Pointer Arithmetic and Arrays",
              "Function Pointers and Callbacks"
            ]
          },
          {
            lessonId: "cpp3-2",
            lessonTitle: "Dynamic Memory Allocation",
            lessonArticles: [
              "new and delete Operators",
              "Memory Leak Prevention",
              "Building a Custom Memory Pool"
            ]
          },
          {
            lessonId: "cpp3-3",
            lessonTitle: "Memory Management with malloc/free",
            lessonArticles: [
              "C-Style Memory Allocation",
              "Memory Management Best Practices",
              "Creating a Resource Manager"
            ]
          }
        ]
      },
      {
        id: "unit-4",
        title: "Linked Lists",
        topicsCovered: [
          {
            lessonId: "cpp4-1",
            lessonTitle: "Singly Linked Lists",
            lessonArticles: [
              "Implementing a Singly Linked List",
              "Traversal and Search Operations",
              "Insertion and Deletion Techniques"
            ]
          },
          {
            lessonId: "cpp4-2",
            lessonTitle: "Doubly Linked Lists",
            lessonArticles: [
              "Building a Doubly Linked List",
              "Bidirectional Traversal Benefits",
              "Implementing a Music Playlist"
            ]
          },
          {
            lessonId: "cpp4-3",
            lessonTitle: "Circular Linked Lists",
            lessonArticles: [
              "Circular List Implementation",
              "Applications of Circular Lists",
              "Building a Task Scheduler"
            ]
          },
          {
            lessonId: "cpp4-4",
            lessonTitle: "Linked List Operations",
            lessonArticles: [
              "Detecting Cycles in Linked Lists",
              "List Reversal Algorithms",
              "Merging Sorted Linked Lists"
            ]
          }
        ]
      },
      {
        id: "unit-5",
        title: "Stacks and Queues",
        topicsCovered: [
          {
            lessonId: "cpp5-1",
            lessonTitle: "Implementation of Stacks",
            lessonArticles: [
              "Array-Based Stack Implementation",
              "Linked List-Based Stack",
              "Building an Expression Evaluator"
            ]
          },
          {
            lessonId: "cpp5-2",
            lessonTitle: "Stacks in C++",
            lessonArticles: [
              "STL Stack Container",
              "Custom Stack Class Design",
              "Stack-Based Algorithms"
            ]
          },
          {
            lessonId: "cpp5-3",
            lessonTitle: "Queues and Dequeues",
            lessonArticles: [
              "Queue Implementation Techniques",
              "Double-Ended Queue Operations",
              "Priority Queue Implementation"
            ]
          },
          {
            lessonId: "cpp5-4",
            lessonTitle: "Circular Queue Implementation",
            lessonArticles: [
              "Circular Queue Data Structure",
              "Efficient Memory Usage",
              "Building a Message Processing System"
            ]
          }
        ]
      },
      {
        id: "unit-6",
        title: "Trees and Graphs",
        topicsCovered: [
          {
            lessonId: "cpp6-1",
            lessonTitle: "Binary Trees",
            lessonArticles: [
              "Binary Tree Implementation",
              "Tree Node Structure Design",
              "Building an Expression Tree"
            ]
          },
          {
            lessonId: "cpp6-2",
            lessonTitle: "Tree Traversal",
            lessonArticles: [
              "Inorder, Preorder, and Postorder Traversal",
              "Level-Order Traversal Techniques",
              "Applications of Tree Traversals"
            ]
          },
          {
            lessonId: "cpp6-3",
            lessonTitle: "Graph Representation",
            lessonArticles: [
              "Adjacency Matrix vs Adjacency List",
              "Weighted Graph Implementation",
              "Creating a Social Network Model"
            ]
          },
          {
            lessonId: "cpp6-4",
            lessonTitle: "Graph Traversal",
            lessonArticles: [
              "Depth-First Search Algorithm",
              "Breadth-First Search Implementation",
              "Connected Components in Graphs"
            ]
          }
        ]
      },
      {
        id: "unit-7",
        title: "Sorting Algorithms",
        topicsCovered: [
          {
            lessonId: "cpp7-1",
            lessonTitle: "Bubble Sort",
            lessonArticles: [
              "Bubble Sort Implementation",
              "Optimization Techniques",
              "Time and Space Complexity Analysis"
            ]
          },
          {
            lessonId: "cpp7-2",
            lessonTitle: "Quick Sort",
            lessonArticles: [
              "Quick Sort Algorithm Design",
              "Pivot Selection Strategies",
              "Optimizing Quick Sort Performance"
            ]
          },
          {
            lessonId: "cpp7-3",
            lessonTitle: "Merge Sort",
            lessonArticles: [
              "Divide and Conquer with Merge Sort",
              "Merge Sort Implementation",
              "External Merge Sort for Large Data"
            ]
          },
          {
            lessonId: "cpp7-4",
            lessonTitle: "Insertion Sort",
            lessonArticles: [
              "Insertion Sort Algorithm",
              "When to Use Insertion Sort",
              "Hybrid Sorting Algorithms"
            ]
          },
          {
            lessonId: "cpp7-5",
            lessonTitle: "Selection Sort",
            lessonArticles: [
              "Selection Sort Implementation",
              "Comparing Selection and Bubble Sort",
              "Stability in Sorting Algorithms"
            ]
          }
        ]
      },
      {
        id: "unit-8",
        title: "Searching Algorithms",
        topicsCovered: [
          {
            lessonId: "cpp8-1",
            lessonTitle: "Linear Search",
            lessonArticles: [
              "Linear Search Algorithm",
              "Optimizing Linear Search",
              "Searching Unsorted Data"
            ]
          },
          {
            lessonId: "cpp8-2",
            lessonTitle: "Binary Search",
            lessonArticles: [
              "Binary Search Implementation",
              "Iterative vs Recursive Approaches",
              "Binary Search Variations"
            ]
          },
          {
            lessonId: "cpp8-3",
            lessonTitle: "Searching in Trees",
            lessonArticles: [
              "Binary Search Tree Operations",
              "Tree Balancing Techniques",
              "Building a Dictionary Application"
            ]
          }
        ]
      },
      {
        id: "unit-9",
        title: "Dynamic Programming",
        topicsCovered: [
          {
            lessonId: "cpp9-1",
            lessonTitle: "Fibonacci Sequence",
            lessonArticles: [
              "Recursive vs Dynamic Programming",
              "Memoization Techniques",
              "Space Optimization in DP"
            ]
          },
          {
            lessonId: "cpp9-2",
            lessonTitle: "Knapsack Problem",
            lessonArticles: [
              "0/1 Knapsack Problem Implementation",
              "Top-Down vs Bottom-Up Approach",
              "Fractional Knapsack Greedy Algorithm"
            ]
          },
          {
            lessonId: "cpp9-3",
            lessonTitle: "Longest Common Subsequence",
            lessonArticles: [
              "LCS Algorithm Implementation",
              "Practical Applications of LCS",
              "String Edit Distance Problems"
            ]
          }
        ]
      },
      {
        id: "unit-10",
        title: "Advanced Data Structures",
        topicsCovered: [
          {
            lessonId: "cpp10-1",
            lessonTitle: "Trie Data Structure",
            lessonArticles: [
              "Implementing a Trie for String Storage",
              "Prefix Matching Algorithms",
              "Building an Auto-Complete System"
            ]
          },
          {
            lessonId: "cpp10-2",
            lessonTitle: "Segment Tree",
            lessonArticles: [
              "Segment Tree Implementation",
              "Range Query Operations",
              "Dynamic Range Updates"
            ]
          },
          {
            lessonId: "cpp10-3",
            lessonTitle: "Graph Algorithms",
            lessonArticles: [
              "Dijkstra's Shortest Path Algorithm",
              "Minimum Spanning Tree with Kruskal's",
              "Topological Sorting in DAGs"
            ]
          },
          {
            lessonId: "cpp10-4",
            lessonTitle: "Disjoint Set Union",
            lessonArticles: [
              "Union-Find Data Structure",
              "Path Compression Optimization",
              "Applications in Network Connectivity"
            ]
          }
        ]
      }
    ]
  }
];
