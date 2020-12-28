import * as React from "react";
import { useContext } from "react";
import { UserIdContextData } from "../context/auth";
import { CurrentLoginContext } from "../context/CurrentLogin";
import { NotAuthenticated } from "./NotAuthenticated";
import { Authenticated } from "./Authenticated";

export function FirstPage() {
  const userIdData = useContext(UserIdContextData);

  return (
    <>
      {userIdData.authUserId &&
      JSON.stringify(userIdData.authUserId) !== "{}" ? (
        <CurrentLoginContext>
          <Authenticated />
        </CurrentLoginContext>
      ) : (
        <NotAuthenticated />
      )}
    </>
  );
}
