import Header from "../../Components/Header";
import PerfilUser from "../../Components/PerfilUser";
import Footer from "../../Components/Footer";
import { ProfileContainer } from "./style";

const Profile = () => {
  return (
    <ProfileContainer>
      <Header />
      <PerfilUser />
      <Footer />
    </ProfileContainer>
  );
};

export default Profile;
