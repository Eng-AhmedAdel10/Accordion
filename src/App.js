import React from "react";
import Questions from "./Questions";
import data from "./data";
function App() {
  return (
    <main>
    <div className="container">
      <h2 className="title">Questions And Answers About Login</h2>
      <section className="list">
      {
        data.map(item=> <Questions key={item.id} {...item} />)
      }
      </section>
    </div>
    </main>
  );
}

export default App;
