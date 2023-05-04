import { Route, Routes } from "react-router-dom";

import { SignupPage } from "../Pages/Signup/Signup";
import { Dashboard } from "../Pages/Dashboard";
import { LoginPage } from "../Pages/Login/Login";
import { TaskProviders } from "../Providers/TaskProviders/taskContext";
import { PostProvider } from "../Providers/PostContext";


export const Router = () => {

    return (
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/" element={<TaskProviders><PostProvider><Dashboard/></PostProvider></TaskProviders>}/>
      </Routes>
    );
  };
  