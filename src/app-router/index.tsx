import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../router";

export const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes?.map((route, index) => (
        <Route key={index} element={route.component} path={route.path} />
      ))}
    </Routes>
  );
};
