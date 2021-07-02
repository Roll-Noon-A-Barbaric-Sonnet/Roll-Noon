import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import '../css/index.css'



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="navButtonL" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;
