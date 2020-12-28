import * as React from "react";
import { Form, Button } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import { passwordMinimumLength } from "./Login";

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

  async function registerUser(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:5000/register-user", { userData });
      setSuccess(true);
    } catch (error) {
      if (error.response) {
        /*
          The request was made and the server responded with a
          status code that falls out of the range of 2xx
         */
      } else if (error.request) {
        /*
        The request was made but no response was received, `error.request`
         is an instance of XMLHttpRequest in the browser and an instance
         of http.ClientRequest in Node.js
         */
      } else {
        // Something happened in setting up the request and triggered an Error
      }
    }
  }

  const passwordToShort = passwordMinimumLength(userData.password);

  const buttonDisabled =
    !userData.email ||
    !userData.firstName ||
    !userData.lastName ||
    !userData.password ||
    passwordToShort;

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
          {passwordToShort && userData.password ? (
            <p style={{ color: "red" }}>
              Password minimum length is 6 Characters
            </p>
          ) : (
            ""
          )}
          <Button
            type="submit"
            onClick={registerUser}
            disabled={buttonDisabled}
          >
            Register
          </Button>
        </Form>
      )}
    </>
  );
}
