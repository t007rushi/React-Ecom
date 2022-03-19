import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
