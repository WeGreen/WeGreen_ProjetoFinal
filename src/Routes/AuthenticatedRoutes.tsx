import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../Providers/UserContext";

export const AuthenticatedRoutes = () => {
  const { user, isLoadingUser } = useContext(UserContext)

  if (isLoadingUser) return <>Carregando a página...</>;
  return user ? <Outlet /> : <Navigate to="/login" />;
};
