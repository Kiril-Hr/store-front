import { BrowserRouter } from "react-router-dom";
import AppRouter from "../components/Routes/AppRouter";
import NavbarComponent from "../components/Navbar/NavbarComponent";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <AppRouter />
    </BrowserRouter>
  );
};
export default App;
