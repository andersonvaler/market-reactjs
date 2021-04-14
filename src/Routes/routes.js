import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useToken } from "../Providers/Token";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useToken();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard/user",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
