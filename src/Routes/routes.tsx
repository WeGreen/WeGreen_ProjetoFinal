import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../Pages/Login";
import { SignupPage } from "../Pages/Signup";
import { Dashboard } from "../Pages/Dashboard";
import { TaskProviders } from "../Providers/TaskProviders/taskContext";

export const Router = () => {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>

        <Route path="/" >
        <Route index element={
            <TaskProviders>
              <Dashboard />
            </TaskProviders>
          }
        />

        </Route>

      </Routes>
    );
  };
  