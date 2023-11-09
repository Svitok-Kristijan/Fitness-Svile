import "./App.scss";
import Home from "./home/home";
import Training from "./training/training";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./navbar/navbar";
import Arm from "./training/arm/arm";
import Shoulder from "./training/sholuder/shoulder";
import Back from "./training/back/back";
import Chest from "./training/chest/chest";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/training"
            element={
              <div>
                <Navbar />
                <Training />
              </div>
            }
          />
          <Route
            path="/arm"
            element={
              <div>
                <Navbar />
                <Arm />
              </div>
            }
          />
          <Route
            path="/shoulder"
            element={
              <div>
                <Navbar />
                <Shoulder />
              </div>
            }
          />
          <Route
            path="/back"
            element={
              <div>
                <Navbar />
                <Back />
              </div>
            }
          />
          <Route
            path="/chest"
            element={
              <div>
                <Navbar />
                <Chest />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
