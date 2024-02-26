import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { PrivateRoute } from "../privateRoute";
import Styles from "./app.module.scss";
import { Terms } from "../../pages/home/terms";
import { Login } from "../../pages/home/login";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Home} />} />
          <Route path="/terms" element={<PrivateRoute component={Terms} />} />
          <Route path="/login" element={<PrivateRoute component={Login} />} />
        </Routes>
      </Layout>
    </div>
  );
}

const Layout = ({ children }) => (
  <div className={Styles.mainContainer}>
    <div className={Styles.contentContainer}>{children}</div>
  </div>
);

export { App };
