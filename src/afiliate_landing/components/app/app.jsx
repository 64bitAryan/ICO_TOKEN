import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { PrivateRoute } from "../privateRoute";
import Styles from "./app.module.scss";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Home} />} />
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
