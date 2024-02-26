import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      {<Component {...props} />}
      <Footer />
    </>
  );
};

export { PrivateRoute };
