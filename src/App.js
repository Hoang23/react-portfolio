import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Intro from './components/Intro';
import Home from './pages/Index';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
