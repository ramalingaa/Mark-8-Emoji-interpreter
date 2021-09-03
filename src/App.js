import { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
var emojiList = Object.keys(emojiDictionary);
var userInput = prompt("");

export default function App() {
  const [meaningShow, ShowElements] = useState("");
  function showElementIn(element) {
    var newElement = element.target.value;
    var inputGiven = emojiDictionary[newElement];
    ShowElements(inputGiven);
  }
  function emojiClickHandler(item) {
    var meaningShow = emojiDictionary[item];
    ShowElements(meaningShow);
  }
  return (
    <div className="App">
      <h1>Welcome {userInput}</h1>
      <input onChange={showElementIn} />
      <h2>{meaningShow}</h2>
      <h3>Emoji's we know</h3>
      {emojiList.map(function (item) {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ padding: "1rem", fontSize: "1.5rem" }}
          >
            {item}
          </span>
        );
      })}
      ;
    </div>
  );
}
