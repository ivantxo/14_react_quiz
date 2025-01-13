import Header from "./Header";
import Body from "./Body";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
