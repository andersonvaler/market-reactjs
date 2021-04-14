import CardHome from "../../Components/Cards/CardHome";
import { PageContainer, RightContainer, LeftContainer, Msg } from "./style";
import FullLogo from "../../Components/Logo/FullLogo";

const Home = () => {
  return (
    <PageContainer>
      <FullLogo />
      <LeftContainer>
        <Msg>
          Conheça o <span>Market</span>, o aplicativo que conecta lojas que
          desejam crescer com clientes que desejam um serviço rápido e
          eficiente.
        </Msg>
      </LeftContainer>
      <RightContainer>
        <CardHome />
      </RightContainer>
      <div className="cloud">
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
                fill="#933FFF"
                stroke="#B378FF"
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
              fill="#B378FF"
            />
          </svg>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
