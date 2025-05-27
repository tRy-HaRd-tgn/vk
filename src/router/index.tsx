import App from "../app/main/App";
import Result from "../app/table/index";
export const publicRoutes = [
  { path: "*", component: <App />, exact: true },
  { path: "/", component: <App />, exact: true },
  { path: "/result", component: <Result />, exact: true },
];
