import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import PlaceOrder from "./Components/PlaceOrder";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MyProfile from "./Components/MyProfile";
import Header from "./Components/Header";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Login />
      {/* <Router>
      <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
