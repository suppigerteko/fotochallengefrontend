import * as React from "react";
import { Button } from "semantic-ui-react";
import { UserIdContextData } from "../context/auth";
import { useContext } from "react";

export function Logout() {
  const userIdData = useContext(UserIdContextData);
  const handleSubmit = () => {
    userIdData.setAuthUserId(0);
    window.localStorage.removeItem("userId");
  };

  console.log(userIdData.authUserId);

  return (
    <>
      <Button onClick={handleSubmit}>Logout</Button>
    </>
  );
}
