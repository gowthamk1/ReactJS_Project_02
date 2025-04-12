import { useState } from "react";
import StartGame from "./Componants/StartGame";
import GamePlay from "./Componants/GamePlay"; // Make sure this exists

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
    console.log("Toggled! isGameStarted:", !isGameStarted);
  };

  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggleGame={toggleGame} />
      )}
    </>
  );
}

export default App;
