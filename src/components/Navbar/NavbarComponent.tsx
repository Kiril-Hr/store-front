import { useContext } from "react";
import { Context } from "../..";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";
import classes from "./style.module.css";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavbarComponent = observer(() => {
  const auth = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container className={classes.navInner}>
        <Button variant="light">
          <NavLink to={SHOP_ROUTE}>Buy device</NavLink>
        </Button>
        {auth?.user._isAuth ? (
          <Nav className="ml-auto">
            <Button variant="light">Log out</Button>
            <Button variant="light" className="ms-4">
              Admin panel
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button variant="light" onClick={() => auth?.user.setIsAuth(true)}>
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
export default NavbarComponent;
