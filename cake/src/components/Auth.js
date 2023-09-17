import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/fontawesome-free";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Auth = () => {
  return (
    <div className="authContainer">
      <FontAwesomeIcon
        icon={faCakeCandles}
        color={"#04AAFF"}
        size="3x"
        style={{ marginBottom: 30 }}
      />

      <div className="authBtns">
        <button name="google">
          Continue with Google <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button name="github">
          Continue with Github <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  );
};

export default Auth;
