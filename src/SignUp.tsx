import * as React from "react";
import { Form, Button } from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import axios from "axios";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function SignUp() {
  const [userData, setUserData] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const registerUser = (e: SyntheticEvent) => {
    e.preventDefault();
    // get our form data out of state

    axios
      .post("http://127.0.0.1:5000/register-user", { userData })
      .then((result) => {
        setSuccess(true);
      });
  };

  return (
    <>
      {success ? (
        <h1>Erfolgreich registiert</h1>
      ) : (
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              onChange={(v) => {
                setUserData({ ...userData, firstName: v.target.value });
              }}
              value={userData.firstName}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              onChange={(v) => {
                setUserData({ ...userData, lastName: v.target.value });
              }}
              value={userData.lastName}
              placeholder="Last Name"
            />
          </Form.Field>
          <Form.Field>
            <label>E-Mail</label>
            <input
              onChange={(v) => {
                setUserData({ ...userData, email: v.target.value });
              }}
              value={userData.email}
              type="email"
              placeholder="E-Mail"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              onChange={(v) => {
                setUserData({ ...userData, password: v.target.value });
              }}
              value={userData.password}
              type="password"
              placeholder="Password"
            />
          </Form.Field>
          <Button type="submit" onClick={registerUser}>
            Register
          </Button>
        </Form>
      )}
    </>
  );
}
