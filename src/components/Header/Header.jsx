import "./Header.css";

const reactDescriptions = ["Fundamental", "Core", "Cruical"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <h1>Full-Stack Factory</h1>
      <p>Crafting the parts, you decide how to assemble them</p>
    </header>
  );
}
