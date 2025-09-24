import { useState } from "react";
import { languages } from "./assets/languages";

export default function AssemblyEndgame() {
  const [currentWorld, setCurrentWorld] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(guessedLetters);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const languageElement = languages.map((lang) => {
    const style = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span className="chip" key={lang.name} style={style}>
        {lang.name}
      </span>
    );
  });

  const letterElement = currentWorld
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  const keyboardElements = alphabet.split("").map((letter) => {
    return (
      <button key={letter} onClick={() => addGuessedLetter(letter)}>
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You Win!</h2>
        <p>Well done!🎉</p>
      </section>
      <section className="language-chips">{languageElement}</section>
      <section className="word">{letterElement}</section>
      <section className="keyboard">{keyboardElements}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}
