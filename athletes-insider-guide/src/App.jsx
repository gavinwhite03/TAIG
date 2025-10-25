import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import EpisodesPage from './components/EpisodesPage'
import BlogPage from './components/BlogPage'
import BlogPostPage from './components/BlogPostPage'
import SplashCursor from './SplashCursor/SplashCursor'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";


function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app">
      <Navbar />
      {!isHome && <SplashCursor />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>

      <Footer />
    </div>
  );
}


export default App