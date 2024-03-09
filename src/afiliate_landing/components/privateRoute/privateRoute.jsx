import { useSelector } from "react-redux";

import { Footer } from "../footer";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <>
      {<Component {...props} />}
      <Footer />
    </>
  );
};

export { PrivateRoute };
