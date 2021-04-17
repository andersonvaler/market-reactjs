// import { useParams } from "react-router-dom";
import FormLogin from "../../Components/FormLogin";
import FullLogo from "../../Components/Logo/FullLogo";
import FullLogoBusiness from "../../Components/Logo/FullLogoBusiness";
import {
  LoginContainer,
  PageContainer,
  Msg,
  SubMsg,
  TextContainer,
} from "./style";
import { useParams } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { userType } = useParams();
  const notifyError = () =>
    toast.error("tente novamente", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyLogin = () => {
    toast.success("Logado com seucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notifyLoginArea = () => {
    toast.info("Área de Login errada!", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <PageContainer userType={userType}>
      <ToastContainer />
      {userType === "user" ? <FullLogo /> : <FullLogoBusiness />}
      <TextContainer>
        <Msg>
          Nós ajudamos você com um delivery rápido de itens de mercados próximos
          a você.
        </Msg>
        <SubMsg>
          Escolha os mercados mais queridos por você e descubra alguns com
          preços e descontos especiais.
        </SubMsg>
      </TextContainer>
      <LoginContainer>
        <FormLogin
          userType={userType}
          notifyError={notifyError}
          notifyLogin={notifyLogin}
          notifyLoginArea={notifyLoginArea}
        />
        <h4>Market &copy; Curitiba, Brazil</h4>
      </LoginContainer>
      <div className="greenClouds">
        <div className="cloud2">
          <svg
            width="482"
            height="523"
            viewBox="0 0 582 623"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M395.273 313.581L395.878 316.574L398.924 316.779C466.177 321.319 519 375.242 519 441.542C519 510.882 461.247 567.333 389.875 567.333H43.75C-42.2658 567.333 -112 499.201 -112 415.583C-112 337.519 -51.3451 272.956 26.8561 264.85L28.9703 264.631L29.9719 262.756C62.5684 201.738 128.053 160 203.5 160C298.542 160 377.551 225.921 395.273 313.581Z"
                stroke={userType === "user" ? "#D6FA7A" : "#E0F066"}
                strokeWidth="8"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="639"
                  height="623"
                  fill="white"
                  transform="translate(-57)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="cloud1">
          <svg
            width="539"
            height="316"
            viewBox="0 0 639 416"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M515.194 156.788C497.089 67.2321 416.415 0 319.5 0C242.554 0 175.725 42.5717 142.444 104.872C62.3025 113.178 0 179.372 0 259.583C0 345.505 71.6213 415.333 159.75 415.333H505.875C579.36 415.333 639 357.187 639 285.542C639 217.012 584.419 161.461 515.194 156.788Z"
              fill={userType === "user" ? "#D6FA7A" : "#E0F066"}
            />
          </svg>
        </div>
      </div>
      <div className="purpleClouds">
        <div className="cloud4">
          <svg
            width="545"
            height="317"
            viewBox="0 0 645 417"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M516.112 158.421L516.722 161.409L519.764 161.613C587.699 166.155 641 220.107 641 286.375C641 355.681 582.723 412.167 510.625 412.167H161.25C74.3709 412.167 4 344 4 260.417C4 182.383 65.2073 117.794 144.19 109.684L146.297 109.468L147.302 107.603C180.202 46.5897 246.311 4.83331 322.5 4.83331C418.481 4.83331 498.228 70.7823 516.112 158.421Z"
              stroke={userType === "user" ? "#E5D0FF" : "#6414E6"}
              strokeWidth="8"
            />
          </svg>
        </div>
        <div className="cloud3">
          <svg
            width="539"
            height="316"
            viewBox="0 0 639 416"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M515.194 156.788C497.089 67.2321 416.415 0 319.5 0C242.554 0 175.725 42.5717 142.444 104.872C62.3025 113.178 0 179.372 0 259.583C0 345.505 71.6213 415.333 159.75 415.333H505.875C579.36 415.333 639 357.187 639 285.542C639 217.012 584.419 161.461 515.194 156.788Z"
              fill={userType === "user" ? "#E5D0FF" : "#6414E6"}
            />
          </svg>
        </div>
      </div>
    </PageContainer>
  );
};

export default Login;
