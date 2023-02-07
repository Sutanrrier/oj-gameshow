import CardButton from "../components/CardButton";

function App() {
  const questions = [
    { id: 1, categoria: "TRIVIA" },
    { id: 2, categoria: "TRIVIA" },
    { id: 3, categoria: "TRIVIA" },
    { id: 4, categoria: "TRIVIA" },
    { id: 5, categoria: "TRIVIA" },
    { id: 6, categoria: "TRIVIA" },
    { id: 7, categoria: "TRIVIA" },
    { id: 8, categoria: "TRIVIA" },
    { id: 9, categoria: "TRIVIA" },
    { id: 10, categoria: "TRIVIA" },
    { id: 11, categoria: "TRIVIA" },
    { id: 12, categoria: "TRIVIA" },
    { id: 13, categoria: "TRIVIA" },
    { id: 14, categoria: "TRIVIA" },
    { id: 15, categoria: "TRIVIA" },
    { id: 16, categoria: "TRIVIA" },
    { id: 17, categoria: "TRIVIA" },
    { id: 18, categoria: "TRIVIA" },
    { id: 19, categoria: "TRIVIA" },
    { id: 20, categoria: "TRIVIA" },
    { id: 21, categoria: "TRIVIA" },
    { id: 22, categoria: "TRIVIA" },
    { id: 23, categoria: "TRIVIA" },
    { id: 24, categoria: "TRIVIA" },
  ];

  return (
    <div>
      <h1 className="oj-title">100% OJ GAMESHOW</h1>
      <div className="oj-questions-panel">
        {questions.map((elemento) => {
          return <CardButton id={elemento.id} categoria={elemento.categoria} />;
        })}
      </div>
    </div>
  );
}

export default App;
