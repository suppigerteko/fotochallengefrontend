import React, { createContext, useState } from "react";

export const UserIdContextData = createContext({
  setAuthUserId: (authUserId: number) => {},
  authUserId: null,
});

interface UserIdContextProps {
  children: React.ReactNode;
}

export function UserIdContext(p: UserIdContextProps) {
  const existingAuthUserId = JSON.parse(localStorage.getItem("userId") || "{}");
  const [authUserId, setAuthUserId] = useState(existingAuthUserId);
  const setUserId = (authUserId: number) => {
    localStorage.setItem("userId", JSON.stringify(authUserId));
    setAuthUserId(authUserId);
  };

  return (
    <UserIdContextData.Provider
      value={{ setAuthUserId: setUserId, authUserId: authUserId }}
    >
      {p.children}
    </UserIdContextData.Provider>
  );
}
