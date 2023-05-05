import { Route, Routes } from "react-router-dom";

import { SignupPage } from "../Pages/Signup/Signup";
import { Dashboard } from "../Pages/Dashboard";
import { LoginPage } from "../Pages/Login/Login";
import { TaskProviders } from "../Providers/TaskProviders/taskContext";
import { PostProvider } from "../Providers/PostContext";
import { PublicRoutes } from "./PublicRoutes";
import { AuthenticatedRoutes } from "./AuthenticatedRoutes";


export const Router = () => {

    return (
      <Routes>
        <Route path="/login" element={<PublicRoutes />}>
          <Route index element={<LoginPage/>}/>
        </Route>

        <Route path="/signup" element={<PublicRoutes />}>
          <Route index element={<SignupPage/>}/>
        </Route>

        <Route path="/" element={<AuthenticatedRoutes/>}>
          <Route index element={<TaskProviders><PostProvider><Dashboard/></PostProvider></TaskProviders>}/>
        </Route>
      </Routes>
    );
  };
  