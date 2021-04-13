import { useHistory } from "react-router";
import { FullLogoContainer } from "./style";

const FullLogoBusiness = () => {
  const history = useHistory();

  return (
    <FullLogoContainer onClick={() => history.push("/")}>
      <h1>Market</h1>
      <h5>for Business</h5>
    </FullLogoContainer>
  );
};

export default FullLogoBusiness;
