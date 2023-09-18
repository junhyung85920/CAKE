import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/fontawesome-free";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const Auth = () => {
  return (
    <div className="authContainer">
      <h1>CAKE</h1>
      {/* <FontAwesomeIcon
        icon={faCakeCandles}
        color={"#04AAFF"}
        size="5x"
        style={{ marginBottom: 30 }}
      /> */}

      <div className="authBtns">
        <button name="google" className="authBtn">
          Continue with Google <FontAwesomeIcon icon={faGoogle} size="2x" />
        </button>
        <button name="github" className="authBtn">
          Continue with Github <FontAwesomeIcon icon={faGithub} size="2x" />
        </button>
      </div>
    </div>
  );
};

export default Auth;
