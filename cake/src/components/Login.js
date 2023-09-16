import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <text className="cake">CAKE</text>

      <div className="mithosis">
        <div className="log-inwith-google">Log In with Google</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="413"
          height="263"
          viewBox="0 0 413 263"
          fill="none"
        >
          <g filter="url(#filter0_d_1_13)">
            <path
              d="M229.67 199.384C210.89 189.162 184.348 188.854 165.334 198.631C152.201 205.385 137.334 209.193 121.588 209.193C68.2439 209.193 25 165.497 25 111.597C25 57.6946 68.2439 14 121.588 14C138.137 14 153.714 18.2056 167.33 25.6167C186.11 35.8391 212.652 36.1455 231.664 26.3686C244.799 19.6149 259.666 15.8074 275.412 15.8074C328.757 15.8074 372 59.5029 372 113.403C372 167.305 328.757 211 275.412 211C258.863 211 243.286 206.795 229.67 199.384Z"
              fill="#219653"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_13"
              x="0"
              y="0"
              width="413"
              height="263"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="8" dy="19" />
              <feGaussianBlur stdDeviation="16.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0907118 0 0 0 0 0.229167 0 0 0 0 0.150711 0 0 0 0.22 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_13"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Login;
