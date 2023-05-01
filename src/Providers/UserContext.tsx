import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({} as IUserContext);

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  isLoadingUser: boolean;
}

export interface IUser {
  name: string;
  email: string;
  id: number;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
          // Aqui faz a request pra buscar o usuário atual
          // e coloca ele no setUser
        // setUser(data);
      } catch (error) {
        // mostrar error?
      } finally {
        setLoadingUser(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoadingUser }}>
      {children}
    </UserContext.Provider>
  );
};