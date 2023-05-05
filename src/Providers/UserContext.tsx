import { createContext, useEffect, useState } from "react";
import { TLoginValues } from "../Pages/Login/LoginSchema";
import { toast } from "react-toastify";
import { IUser, api, fetchUserRequest } from "../Utilities/api";
import { TSignupValues } from "../Pages/Signup/SignupSchema";
import { useNavigate } from "react-router-dom";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  user: IUser | null;
  login: (userData: TLoginValues) => Promise<void>;
  register: (userData: TSignupValues) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isLoadingUser: boolean
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [user, setUser] = useState<IUser | null >(null);
  const navigate = useNavigate();

  const login = async (userData: TLoginValues) => {
    setLoading(true);
    try {
      const res = await api.post("/login", userData);

      localStorage.setItem("@wegreen:token", res.data.accessToken);
      localStorage.setItem("@wegreen:userId", res.data.user.id);

      setUser(res.data.user);
      navigate("/")
    } catch (error) {
      toast.error("Verifique seu e-mail e sua senha e tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  const register = async (formData: TSignupValues) => {
    setLoading(true);
    console.log(formData)
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      const res = await api.post("/register", userData);
      localStorage.setItem("@wegreen:token", res.data.accessToken);
      localStorage.setItem("@wegreen:userId", res.data.user.id);
      setUser(res.data.user);
      navigate("/login")
    } catch (error) {
      toast.error("Verifique os campos se foram preenchidos corretamente e tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("@wegreen:userId");
    localStorage.removeItem("@wegreen:token");

    setUser(null);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoadingUser(true);
        const userId = localStorage.getItem("@wegreen:userId");
        const res = await fetchUserRequest(userId)
        setUser(res.data);
      } catch (error) {
        return null
      }
      finally {
        setIsLoadingUser(false);
      }
    })();
  }, []);

  return (
        <UserContext.Provider value={{ user, login, register, logout, loading, isLoadingUser }}>
      {children}
    </UserContext.Provider>
  );
};
