import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import classes from "./Auth.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        height: window.innerHeight - 54,
      }}
    >
      <Card className={classes.card + " p-5"}>
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column mt-3">
          <FormControl className="mt-3" placeholder="Write email..." />
          <FormControl className="mt-3" placeholder="Write password..." />
          <Row className="d-flex justify-content-between mt-3 pe-3 pt-3">
            <div>
              {isLogin ? (
                <>
                  Do not have an account ?
                  <NavLink to={REGISTRATION_ROUTE}> Registration !</NavLink>
                </>
              ) : (
                <>
                  Have an account ?<NavLink to={LOGIN_ROUTE}> Log in !</NavLink>
                </>
              )}
            </div>
            <Button variant="outline-success">
              {isLogin ? "Log in" : "Register"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
export default Auth;
