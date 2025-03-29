import { CORE_CONCEPTS, EXAMPLES } from "../data.js";
import { useState } from "react";

import CoreConcept from "../components/CoreConcepts.jsx";
import TabButton from "../components/TabButton.jsx";

export default function HomePage() {
  console.log("HomePage CORE_CONCEPTS:", CORE_CONCEPTS);
  console.log("HomePage EXAMPLES:", EXAMPLES);

  const [selectedTopic, setSelectedTopic] = useState(null);
  
  function handleClick(selectedButton) {
    console.log("Button clicked:", selectedButton);
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;
  
  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept, index) => {
            console.log(`Rendering CoreConcept ${index}:`, concept);
            return <CoreConcept key={concept.title} {...concept} />;
          })}
        </ul>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {Object.keys(EXAMPLES).map((topic) => (
            <TabButton
              key={topic}
              isSelected={selectedTopic === topic}
              onSelect={() => handleClick(topic)}
            >
              {topic}
            </TabButton>
          ))}
        </menu>

        {tabContent}
      </section>
    </main>
  );
}