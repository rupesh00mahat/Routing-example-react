import "./style.css";
import Home from "./home";
import About from "./about";
import Header from "./header";
import Services from "./services";
import Error from "./Error";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WebDev from "./web-dev";
import AppDev from "./app-dev";
import EmployeeInfo from "./EmployeeInfo";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/employees" element={<About />}></Route>
          <Route path="/employees/:id" element={<EmployeeInfo />} />

          <Route path="/services" element={<Services />}>
            <Route index element={<WebDev />} />
            <Route path="web-dev" element={<WebDev />} />
            <Route path="app-dev" element={<AppDev />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// home- /
// about - /about
//services - /services
