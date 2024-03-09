import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Footer } from "../footer";

export const PublicRoute = ({ component: Component, ...props }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user && props.restricted ? (
        <Navigate
          to={{ pathname: "/", state: { from: props.location } }}
          replace
        />
      ) : (
        <Component {...props} />
      )}
      <Footer />
    </>
  );
};
