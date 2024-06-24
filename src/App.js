import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Home from './pages/Home'; // Assuming you have a Home component


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
