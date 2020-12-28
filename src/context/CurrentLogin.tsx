import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserIdContextData } from "./auth";

interface CurrentLogin {
  id: number | null;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const initialCurrentLogin: CurrentLogin = {
  id: null,
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

export const CurrentLoginContextData = createContext<CurrentLogin>(
  initialCurrentLogin
);

interface CurrentLoginProps {
  children: React.ReactNode;
}
export function CurrentLoginContext(p: CurrentLoginProps) {
  const [currentLogin, setCurrentLogin] = useState<CurrentLogin>(
    initialCurrentLogin
  );

  console.log("nicht gut");
  const userData = useContext(UserIdContextData);

  useEffect(() => {
    async function getCurrentLogin() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/currentLogin", {
          params: {
            userId: userData.authUserId,
          },
        });
        setCurrentLogin(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCurrentLogin();
  }, []);

  return (
    <CurrentLoginContextData.Provider value={currentLogin}>
      {p.children}
    </CurrentLoginContextData.Provider>
  );
}
