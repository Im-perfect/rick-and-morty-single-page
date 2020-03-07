import React from "react";
import Header from "./components/Header";
import Route from "./components/Routes";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Route />
      </main>
      <footer>
        <p>Ke Zhang @2020</p>
      </footer>
    </div>
  );
}

export default App;
