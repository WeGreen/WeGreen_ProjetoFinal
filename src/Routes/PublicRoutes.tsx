import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../Providers/UserContext";
import { useContext } from "react";

export const PublicRoutes = () => {
  const { user, isLoadingUser } = useContext(UserContext);

  if (isLoadingUser) return <>Carregando...</>;
  return !user ? <Outlet /> : <Navigate to="/" />;
};
