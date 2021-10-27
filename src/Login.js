import React from "react";
import "./Login.css";
import LoginIcon from "@mui/icons-material/Login";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //sign in...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="Login">
      <div className="login_logo">
        <img
          src="https://media.discordapp.net/attachments/885634202593296385/902491449902379078/4550_-_Logo_Design_4.png?width=485&height=670"
          alt=""
        />
        <img src="" alt="" />
      </div>
      <LoginIcon type="submit" onClick={signIn}></LoginIcon>
      <p>Sign in</p>
    </div>
  );
}

export default Login;
