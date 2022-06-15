import React from "react";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, nickname } = user;

  return (
    <div className="row profile-header">
      <div className="col-md text-center text-md-left">
        <h2><span className="text-success">{nickname.charAt(0).toUpperCase() + nickname.slice(1)}</span>'s Pantry</h2>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
