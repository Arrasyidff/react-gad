import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper font-sans">
        <Navbar />
        <Content />
      </div>
    </Router>
  );
}

export default App;
