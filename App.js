import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import Login from "./Components/Login/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbarclass from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
function App() {
  return (
    // <Routes>
    //   <Route path="/" component={DashBoard} />
    // </Routes>

    <div className="App">
      {/* <DashBoard /> */}
      <BrowserRouter>
      <Navbarclass />

        <Routes>
          <Route path="/" exact element={<DashBoard />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Signup" exact element={<Signup />} />
        </Routes>
        {/* <Route path="/" component={BlogPage} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
