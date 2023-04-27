import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../Pages/Login";
import { SignupPage } from "../Pages/Signup";
import { Dashboard } from "../Pages/Dashboard";

export const Router = () => {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    );
  };
  