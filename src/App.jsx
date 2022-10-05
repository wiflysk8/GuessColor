import { useEffect, useState } from "react";
import "./App.css";

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16_777_215).toString(16);
  return `#${randomColor}`;
};

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [response, setResponse] = useState("");

  useEffect(() => {
    setColor(generateRandomColor());
  }, [generateRandomColor]); //]);

  useEffect(() => {
    const correctAnswer = color;
    const incorrectAnswer1 = generateRandomColor();
    const incorrectAnswer2 = generateRandomColor();
    const answers = [correctAnswer, incorrectAnswer1, incorrectAnswer2];
    const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
    setAnswers(shuffledAnswers);
  }, [color, generateRandomColor]);

  const handleCheck = (answer) => {
    if (answer === color) {
      setResponse("Correct!");
      setColor(generateRandomColor());
      setTimeout(() => {
        setResponse("");
      }, 1000);
    } else {
      setResponse("Wrong!!!");
    }
  };

  return (
    <div className="App">
      <div className="colorBlock" style={{ background: color }} />
      <div className="answers">
        {answers.map((answer) => (
          <button key={answer} onClick={() => handleCheck(answer)}>
            {answer}
          </button>
        ))}
        {response && <p className={response === "Correct!" ? "correct" : "wrong"}>{response}</p>}
      </div>
    </div>
  );
}

export default App;
