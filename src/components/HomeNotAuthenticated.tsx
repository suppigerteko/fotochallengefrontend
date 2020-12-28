import * as React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import { MainPageProps } from "./NotAuthenticated";

export function Home(p: MainPageProps) {
  return (
    <>
      <Divider />
      <Introduction />
      <Divider />
      <RegisterOrLogin {...p} />
    </>
  );
}

function Introduction() {
  return (
    <Container text>
      <Header as="h2">Welcome to photo challenge</Header>
      <p>
        Every week on Monday a new photo challenge will be announced. Upload
        your photo to the challenge and rate the other users. The user with the
        most votes will be chosen at the end of the week and will receive a
        great prize.
      </p>
    </Container>
  );
}

function RegisterOrLogin(p: MainPageProps) {
  return (
    <Segment placeholder>
      <Grid columns={2} stackable textAlign="center">
        <Divider vertical>Or</Divider>

        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Header icon>
              <Icon name="sign-in" />
              Already have an account? Then log in and have fun!
            </Header>

            <Button primary onClick={p.openLogin}>
              Login
            </Button>
          </Grid.Column>

          <Grid.Column>
            <Header icon>
              <Icon name="signup" />
              You don't have an account yet? Sign up in less than a minute.
            </Header>
            <Button primary onClick={p.openRegister}>
              Register
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
