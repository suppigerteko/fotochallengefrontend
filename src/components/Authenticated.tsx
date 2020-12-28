import * as React from "react";
import { Container, Menu } from "semantic-ui-react";
import { useState } from "react";
import { Logout } from "./Logout";
import { UserProfil } from "./UserProfil";

enum NavMenuAuthenticated {
  Home = "Home",
  UserProfil = "UserProfil",
  MyPictures = "MyPictures",
  Logout = "Logout",
}

export function Authenticated() {
  const [menu, setMenu] = useState<NavMenuAuthenticated>(
    NavMenuAuthenticated.Home
  );

  return (
    <>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item onClick={() => setMenu(NavMenuAuthenticated.Home)}>
            Home
          </Menu.Item>
          <Menu.Item onClick={() => setMenu(NavMenuAuthenticated.UserProfil)}>
            User Profil
          </Menu.Item>
          <Menu.Item onClick={() => setMenu(NavMenuAuthenticated.MyPictures)}>
            My Pictures
          </Menu.Item>
          <Menu.Item onClick={() => setMenu(NavMenuAuthenticated.Logout)}>
            Logout
          </Menu.Item>
        </Container>
      </Menu>

      <Container style={{ marginTop: "4em" }}>
        <MainPageAuthenticated activePage={menu} />
      </Container>
    </>
  );
}

export interface MainPageAuthenticatedProps {
  activePage: NavMenuAuthenticated;
}
function MainPageAuthenticated(p: MainPageAuthenticatedProps) {
  switch (p.activePage) {
    case NavMenuAuthenticated.Home:
      return null;
    case NavMenuAuthenticated.UserProfil:
      return <UserProfil />;
    case NavMenuAuthenticated.MyPictures:
      return null;
    case NavMenuAuthenticated.Logout:
      return <Logout />;
  }
}
