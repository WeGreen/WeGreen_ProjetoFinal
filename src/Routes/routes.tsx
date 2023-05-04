import { Route, Routes } from "react-router-dom";

import { SignupPage } from "../Pages/Signup";
import { Dashboard } from "../Pages/Dashboard";
import { LoginPage } from "../Pages/Login";
import { TaskProviders } from "../Providers/TaskProviders/taskContext";


export const Router = () => {

    return (
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/" element={<TaskProviders><Dashboard/></TaskProviders>}/>
      </Routes>
    );
  };
  