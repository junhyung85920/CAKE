import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../components/style.css";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="authContainer">
      <h1 className="font">CAKE</h1>
      {/* <FontAwesomeIcon
        icon={faCakeCandles}
        color={"#04AAFF"}
        size="5x"
        style={{ marginBottom: 30 }}
      /> */}

      <div className="authBtns">
        <button name="google" className="authBtn">
          Continue with Google <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button name="github" className="authBtn">
          Continue with Github <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
      <div>
        <Link to={{ pathname: "/home" }}>
          <button>Go to Home</button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Auth;
