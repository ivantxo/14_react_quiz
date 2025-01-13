import Header from "./Header";
import Body from "./Body";
import { useEffect } from "react";

function App() {
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
  }, []);
  return (
    <div className="app">
      <Header />

      <Body>
        <p>1/15</p>
        <p>Question</p>
      </Body>
    </div>
  );
}

export default App;
