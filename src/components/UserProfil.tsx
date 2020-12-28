import * as React from "react";
import { Container } from "semantic-ui-react";
import { useContext } from "react";
import { CurrentLoginContextData } from "../context/CurrentLogin";

export function UserProfil() {
  const userData = useContext(CurrentLoginContextData);

  return (
    <Container>
      <h1>User Profil</h1>
      <h2>Firstname: {userData.firstname}</h2>
      <h2>Lastname: {userData.lastname}</h2>
      <h2>Email: {userData.email}</h2>
    </Container>
  );
}
