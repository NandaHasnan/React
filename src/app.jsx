
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './page/home/index.jsx';
import About from './page/login/signup.jsx';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="./page/home/index.jsx">Home</Link></li>
          <li><Link to="./page/login/signup.jsx">Signup</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="./page/home/index.jsx" element={<Home />} />
        <Route path="./page/login/signup.jsx" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
