import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from './Components/About/About';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {appRoutes}
      </div>
    </Router>
    
  );
}

export default App;

const appRoutes = (
  <Routes>

    <Route element={<About />} path="/about" />
    <Route element={<Home />} path="/" />

  </Routes>
)
