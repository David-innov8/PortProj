import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routing from "./routes/Routing";

function App() {
  return (
    <Router>
      <div>
        <Routing />
      </div>
    </Router>
  );
}

export default App;
