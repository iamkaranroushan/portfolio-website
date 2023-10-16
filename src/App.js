import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/contact";
import Header from "./components/header";
import MainContent from "./components/mainContent.js";
import Footer from "./components/footer";




function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<MainContent/>} />
            <Route exact path="/contact" element={<Details />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
