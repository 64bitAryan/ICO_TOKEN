import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { PrivateRoute } from "../privateRoute";
import Styles from "./app.module.scss";
import { Terms } from "../../pages/home/terms";
import { Login } from "../../pages/home/login";
import { Stake } from "../../pages/staking/stake";
import { Affiliate } from "../../pages/affiliate/affiliate";
import { logo } from "../../pages/images/logo.png";
import { Home as AffiliateHome } from "../../afiliate_landing/pages/home";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route
            path="/:address?"
            element={<PrivateRoute component={Home} />}
          />
          <Route path="/terms" element={<PrivateRoute component={Terms} />} />
          <Route path="/login" element={<PrivateRoute component={Login} />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/affiliate" element={<AffiliateHome />} />
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
