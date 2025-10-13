import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App