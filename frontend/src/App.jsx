import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/auth/SignUp/SignUp";
import Login from "./pages/auth/Login/Login";
import GetOtp from "./pages/auth/GetOtp/GetOtp";
import Verification from "./pages/auth/verification/Verification";
import NewPassword from "./pages/NewPassword/NewPassword";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getotp" element={<GetOtp/>} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="/newpassword" element={<NewPassword/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
