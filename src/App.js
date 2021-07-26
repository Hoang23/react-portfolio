import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Index";

function App() {
  return (
    <div
      className='react-transition slide-up'
      style={{ animationDuration: "3s" }}
    >
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
