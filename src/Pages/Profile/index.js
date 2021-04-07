import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();

  return (
    <div>
      <h1> Profile - {params.userType} </h1>
    </div>
  );
};

export default Profile;
