import { useHistory } from "react-router";
import { FullLogoContainer } from "./style";

const FullLogo = () => {
  const history = useHistory();

  return (
    <FullLogoContainer onClick={() => history.push("/")}>
      <h1>Market</h1>
    </FullLogoContainer>
  );
};

export default FullLogo;
