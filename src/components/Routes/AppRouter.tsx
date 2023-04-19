import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { useContext } from "react";
import { Context } from "../..";

const AppRouter = () => {
  const auth = useContext(Context);

  console.log(auth);

  return (
    <Routes>
      {auth?.user._isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
export default AppRouter;
