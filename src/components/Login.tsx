import * as React from "react";
import { Form, Button } from "semantic-ui-react";
import { useContext, useState } from "react";
import axios from "axios";
import { UserIdContextData } from "../context/auth";

export function passwordMinimumLength(password: string) {
  const passwordCheck = password.length < 6;
  return passwordCheck;
}

interface LoginProps {}

export function Login(p: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [genericError, setGenericError] = useState("");

  const userData = useContext(UserIdContextData);

  const buttonDisabled = !password || !email;

  async function handleSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setGenericError("");
    setLoginError("");
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });

      userData.setAuthUserId(response.data.userId);
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
        setGenericError("an error has occurred, try again later");
      } else {
        // Something happened in setting up the request and triggered an Error
        setGenericError("An error has occurred, try again later");
      }
    }
  }

  return (
    <>
      <Form>
        <Form.Field>
          <label>E-Mail</label>
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
        {genericError && <p style={{ color: "red" }}>{genericError}</p>}
        <Button type="submit" onClick={handleSubmit} disabled={buttonDisabled}>
          Login
        </Button>
      </Form>
    </>
  );
}
