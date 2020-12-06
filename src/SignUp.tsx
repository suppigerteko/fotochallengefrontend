import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";

import { Table } from "semantic-ui-react";

interface Users {
  name: string;
}

const Signup = () => {
  useEffect(() => {
    const getAPI = () => {
      // Change this endpoint to whatever local or online address you have
      // Local PostgreSQL Database
      const API = "http://127.0.0.1:5000/";

      fetch(API)
        .then((response) => {
          console.log(response);
          return response.json();
        })

        .then((data) => {
          console.log(data);
          setLoading(false);
          setApiData(data);
        });
    };
    getAPI();
  }, []);
  const [apiData, setApiData] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(apiData);
  return (
    <>
      <form method="POST" action="http://127.0.0.1:5000/add-user">
        <div>
          <label>Movie Name</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <button type="submit">Benutzer hinzufügen</button>
        </div>
      </form>

      <main>
        {loading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div>
            <h1>Registrierte Benutzer</h1>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {apiData.map((users) => (
                  <Table.Row>
                    <Table.Cell>{users.name}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        )}
      </main>
    </>
  );
};

export default Signup;

/*
<Form method="POST" action="http://127.0.0.1:5000/add-user">
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>

        <Button type="submit">Benutzer hinzufügen</Button>
      </Form>
<main>
    {loading === true ? (
        <div>
            <h1>Loading...</h1>
        </div>
    ) : (
        <div>
            <h1>Registrierte Benutzer</h1>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apiData.map((users) => (
                        <Table.Row>
                            <Table.Cell>{users.name}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )}
</main>*/
