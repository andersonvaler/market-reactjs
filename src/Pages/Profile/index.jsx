import Header from "../../Components/Header";
import PerfilUser from "../../Components/PerfilUser";
import Footer from "../../Components/Footer";
import { ProfileContainer } from "./style";
import { useParams, useHistory } from "react-router-dom";
import { useUsuario } from "../../Providers/Usuario";
import { useEffect } from "react";

const Profile = () => {
  const { isStore } = useUsuario();
  const { userType } = useParams();
  const history = useHistory();
  const store = userType === "store";

  useEffect(() => {
    if (store && !isStore) {
      history.push("/profile/user");
    }
    if (!store && isStore) {
      history.push("/profile/store");
    }

    //eslint-disable-next-line
  }, [isStore]);

  return (
    <ProfileContainer>
      <Header />
      <PerfilUser />
      <Footer />
    </ProfileContainer>
  );
};

export default Profile;
