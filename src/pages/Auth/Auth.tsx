import { useState, useContext } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import classes from "./Auth.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";
import { login, registration } from "../../query/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { IUserStoreType } from "../../utils/types";

const Auth = observer(() => {
  const { user } = useContext(Context) as {
    user: IUserStoreType;
  };
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [userInfo, setUserInfo] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });

  const univChange = (
    el: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserInfo((prev) => ({
      ...prev,
      [el]: e.target.value,
    }));
  };

  const auth = async () => {
    try {
      let data: IUserStoreType["_user"];
      if (isLogin) {
        data = (await login(
          userInfo.email,
          userInfo.password
        )) as IUserStoreType["_user"];
      } else {
        data = (await registration(
          userInfo.email,
          userInfo.password
        )) as IUserStoreType["_user"];
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

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
          <FormControl
            className="mt-3"
            placeholder="Write email..."
            value={userInfo.email}
            onChange={(e) => univChange("email", e)}
          />
          <FormControl
            className="mt-3"
            placeholder="Write password..."
            value={userInfo.password}
            onChange={(e) => univChange("password", e)}
            type="password"
          />
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
            <Button variant="outline-success" onClick={auth}>
              {isLogin ? "Log in" : "Register"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});
export default Auth;
