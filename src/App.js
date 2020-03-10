import React from "react";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";

function App() {
  return (
    <div>
      <main>
        <Navigation />
        <Routes />
      </main>
      <footer>
        <p>Ke Zhang @2020</p>
      </footer>
    </div>
  );
}

export default App;
