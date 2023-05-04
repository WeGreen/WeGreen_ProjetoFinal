import { createContext, useEffect, useState } from "react";
import { TLoginValues } from "../Pages/LoginSchema";
import { toast } from "react-toastify";
import { api } from "../Utilities/api";
import { TSignupValues } from "../Pages/SignupSchema";
import { useNavigate } from "react-router-dom";

interface UserProviderProps {
  children: React.ReactNode;
}

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface UserContextProps {
  user: IUser | undefined;
  login: (userData: TLoginValues) => Promise<void>;
  register: (userData: TSignupValues) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser | null >(null);
  const navigate = useNavigate();

  const login = async (userData: TLoginValues) => {
    setLoading(true);
    try {
      const res = await api.post("/login", userData);

      localStorage.setItem("@wegreen:token", res.data.accessToken);
      localStorage.setItem("@wegreen:userId", JSON.stringify(res.data.user));

      setUser(res.data.user);
      navigate("/")
    } catch (error: any) {
      console.log(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (formData: TSignupValues) => {
    setLoading(true);
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      const res = await api.post("/register", userData);
      localStorage.setItem("@wegreen:token", res.data.accessToken);
      localStorage.setItem("@wegreen:userId", JSON.stringify(res.data.user));
      setUser(res.data.user);
    } catch (error: any) {
      console.log(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("@wegreen:userId");
    localStorage.removeItem("@wegreen:token");

    setUser(undefined);
    return;
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const user = localStorage.getItem("@wegreen:userId");

        if (user) {
          setUser(JSON.parse(user));
          navigate("/")
        } else {
          throw new Error();
        }
      } catch (error: any) {
        console.log(error);
        navigate("/login")
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};
