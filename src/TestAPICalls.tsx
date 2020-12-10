import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

import { Table } from "semantic-ui-react";

interface Users {
  name: string;
  email: string | null;
}

const TestAddDeleteGetUpdate = () => {
  useEffect(() => {
    const getUsers = () => {
      axios.get("http://127.0.0.1:5000/").then(function (response) {
        setApiData(response.data);
      });
    };
    getUsers();
  }, []);
  const [apiData, setApiData] = useState<Users[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [deleteName, setDeleteName] = useState("");
  const [oldEditName, setOldEditName] = useState("");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const refetch = () => {
    axios.get("http://127.0.0.1:5000/").then(function (response) {
      setApiData(response.data);
    });
  };

  const addUser = (e: any) => {
    e.preventDefault();
    // get our form data out of state

    axios
      .post("http://127.0.0.1:5000/add-user", { name, email })
      .then((result) => {
        refetch();
      });
  };

  const headers = {
    Authorization: "Authorization",
  };
  const data = {
    deleteName: deleteName,
  };

  const deleteUser = (e: any) => {
    e.preventDefault();
    axios
      .delete("http://127.0.0.1:5000/delete-user", { headers, data })
      .then(() => refetch());
  };

  const body = {
    oldEditName: oldEditName,
    editName: editName,
    editEmail: editEmail,
  };

  const editUser = (e: any) => {
    e.preventDefault();
    console.log(body);
    axios
      .put("http://127.0.0.1:5000/update-users", body, {})
      .then(() => refetch());
  };

  return (
    <>
      <h1>Simples Testen der API Calls</h1>
      <h2>Benutzer hinzufügen</h2>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Field>
        <Button type="submit" onClick={addUser}>
          Benutzer hinzufügen
        </Button>
      </Form>

      <h2>Benutzer löschen</h2>
      <Form>
        <Form.Field>
          <label>Name vom zu löschenden Benutzer</label>
          <input
            placeholder="Name vom zum löschenden Benutzer"
            value={deleteName}
            onChange={(e) => setDeleteName(e.target.value)}
            required
          />
        </Form.Field>
        <Button type="submit" onClick={deleteUser}>
          Benutzer löschen
        </Button>
      </Form>

      <h1>Registrierte Benutzer</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {apiData.map((users) => (
            <Table.Row>
              <Table.Cell>{users.name}</Table.Cell>
              <Table.Cell>{users.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <h2>Benutzer editieren </h2>
      <Form>
        <Form.Field>
          <label>Alter Name</label>
          <input
            placeholder="Alter Name"
            value={oldEditName}
            onChange={(e) => setOldEditName(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Neuer Name</label>
          <input
            placeholder="Neuer Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            type="text"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
            required
          />
        </Form.Field>
        <Button type="submit" onClick={editUser}>
          Benutzer editieren
        </Button>
      </Form>
    </>
  );
};

export default TestAddDeleteGetUpdate;
