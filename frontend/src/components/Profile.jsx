import React , { useState, useEffect  } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [loged, setLoged] = useState(true);
  const navigateTo = useNavigate();

  const handleLogoutRedirect = () => navigateTo('/login');

  useEffect(() => {
    navigateTo('/login');;
  }, [loged]);

  if (!currentUser) {
    setLoged(false);
  }

  return (
    <div className="container text-gray-300">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
