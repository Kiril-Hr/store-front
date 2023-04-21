import { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/Routes/AppRouter";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { IUserStoreType } from "../utils/types";
import { check } from "../query/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context) as {
    user: IUserStoreType;
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuth = async () => {
      const token = await check();
      if (token) {
        user.setIsAuth(true);
        setIsLoading(false);
      } else {
        user.setIsAuth(false);
        setIsLoading(false);
      }
    };
    fetchAuth();
  }, []);

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  return (
    <BrowserRouter>
      <NavbarComponent />
      <AppRouter />
    </BrowserRouter>
  );
});
export default App;
