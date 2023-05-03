import { Navigate, Route, Routes } from "react-router-dom";

import { SignupPage } from "../Pages/Signup";
import { Dashboard } from "../Pages/Dashboard";
import { UserContext } from "../Providers/UserContext";
import { useContext } from "react";
import { LoginPage } from "../Pages/Login";
import { TaskProviders } from "../Providers/TaskProviders/taskContext";


export const Router = () => {

  const {user} = useContext(UserContext);
    return (
      <Routes>
        <Route path="/login" element={!user ?  <LoginPage/> :  <Navigate to='/'/>}/>
        <Route path="/signup" element={!user ? <SignupPage/> : <Navigate to='/'/>}/>
        <Route path="/" element={user ? <TaskProviders><Dashboard/></TaskProviders> : <Navigate to='/login'/>}/>
      </Routes>
    );
  };
  