import { useContext } from "react";
import { Context } from "../..";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import classes from "./style.module.css";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { IUserStoreType } from "../../utils/types";

const NavbarComponent = observer(() => {
  const { user } = useContext(Context) as {
    user: IUserStoreType;
  };

  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container className={classes.navInner}>
        <Button variant="light">
          <NavLink to={SHOP_ROUTE}>Buy device</NavLink>
        </Button>
        {user._isAuth ? (
          <Nav className="ml-auto">
            <Button variant="light" onClick={() => logOut()}>
              Log out
            </Button>
            <Button
              variant="light"
              className="ms-4"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin panel
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button variant="light" onClick={() => navigate(LOGIN_ROUTE)}>
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
export default NavbarComponent;
