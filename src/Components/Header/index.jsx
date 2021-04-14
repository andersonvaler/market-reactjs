import { HeaderContainer } from "./style";
import { useHistory, useParams } from "react-router-dom";
import { useToken } from "../../Providers/Token";

const Header = () => {
  const params = useParams();
  const history = useHistory();
  const { clearToken } = useToken();

  return (
    <HeaderContainer>
      {params.userType === "user" ? (
        <>
          <button
            className="header-button"
            onClick={() => history.push("/dashboard/user")}
          >
            <svg
              width="34"
              height="40"
              viewBox="0 0 34 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.4283 19.5455C33.4283 30.146 26.1797 38.5909 17.4068 38.5909C8.6338 38.5909 1.38525 30.146 1.38525 19.5455C1.38525 8.94487 8.6338 0.5 17.4068 0.5C26.1797 0.5 33.4283 8.94487 33.4283 19.5455Z"
                fill="#F6F2F9"
                stroke="#380F52"
              />
              <path
                d="M26.0335 8.28C26.6308 8.28 27.1108 8.472 27.4735 8.856C27.8361 9.21867 28.0175 9.70933 28.0175 10.328V29.272C28.0175 29.8693 27.8468 30.3387 27.5055 30.68C27.1641 31.0213 26.7161 31.192 26.1615 31.192C25.6068 31.192 25.1695 31.0213 24.8495 30.68C24.5295 30.3387 24.3695 29.8693 24.3695 29.272V16.088L18.9295 26.392C18.6735 26.8613 18.3961 27.2133 18.0975 27.448C17.7988 27.6613 17.4468 27.768 17.0415 27.768C16.6361 27.768 16.2841 27.6613 15.9855 27.448C15.6868 27.2347 15.4095 26.8827 15.1535 26.392L9.68145 16.248V29.272C9.68145 29.848 9.51079 30.3173 9.16945 30.68C8.84945 31.0213 8.41212 31.192 7.85745 31.192C7.30279 31.192 6.86545 31.0213 6.54545 30.68C6.22545 30.3387 6.06545 29.8693 6.06545 29.272V10.328C6.06545 9.70933 6.23612 9.21867 6.57745 8.856C6.94012 8.472 7.42012 8.28 8.01745 8.28C8.84945 8.28 9.50012 8.73867 9.96945 9.656L17.0735 23.192L24.1455 9.656C24.6148 8.73867 25.2441 8.28 26.0335 8.28Z"
                fill="#380F52"
              />
            </svg>
          </button>

          <>
            <button
              className="header-button-descktop"
              onClick={() => history.push("/cart")}
            >
              <svg
                width="54"
                height="34"
                viewBox="0 0 54 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 16C21.9 16 21.01 16.9 21.01 18C21.01 19.1 21.9 20 23 20C24.1 20 25 19.1 25 18C25 16.9 24.1 16 23 16ZM17 1C17 1.55 17.45 2 18 2H19L22.6 9.59L21.25 12.03C20.52 13.37 21.48 15 23 15H34C34.55 15 35 14.55 35 14C35 13.45 34.55 13 34 13H23L24.1 11H31.55C32.3 11 32.96 10.59 33.3 9.97L36.88 3.48C37.25 2.82 36.77 2 36.01 2H21.21L20.54 0.57C20.38 0.22 20.02 0 19.64 0H18C17.45 0 17 0.45 17 1ZM33 16C31.9 16 31.01 16.9 31.01 18C31.01 19.1 31.9 20 33 20C34.1 20 35 19.1 35 18C35 16.9 34.1 16 33 16Z"
                  fill="#380F52"
                />
                <path
                  d="M5.6208 33.112C4.68746 33.112 3.88013 32.9113 3.1988 32.51C2.51746 32.0993 1.99013 31.516 1.6168 30.76C1.2528 29.9947 1.0708 29.094 1.0708 28.058C1.0708 27.0313 1.2528 26.14 1.6168 25.384C1.99013 24.6187 2.51746 24.0353 3.1988 23.634C3.88013 23.2233 4.68746 23.018 5.6208 23.018C6.24613 23.018 6.83413 23.1207 7.3848 23.326C7.9448 23.522 8.43013 23.8067 8.8408 24.18C8.99013 24.32 9.0648 24.4833 9.0648 24.67C9.0648 24.8007 9.02746 24.9173 8.9528 25.02C8.87813 25.1133 8.78946 25.16 8.6868 25.16C8.5748 25.16 8.43946 25.1087 8.2808 25.006C7.8048 24.6327 7.3708 24.3713 6.9788 24.222C6.59613 24.0727 6.1528 23.998 5.6488 23.998C4.56613 23.998 3.7308 24.3527 3.1428 25.062C2.56413 25.762 2.2748 26.7607 2.2748 28.058C2.2748 29.3647 2.56413 30.3727 3.1428 31.082C3.7308 31.782 4.56613 32.132 5.6488 32.132C6.14346 32.132 6.5868 32.0573 6.9788 31.908C7.3708 31.7587 7.8048 31.4973 8.2808 31.124C8.43946 31.0213 8.5748 30.97 8.6868 30.97C8.78946 30.97 8.87813 31.0167 8.9528 31.11C9.02746 31.2033 9.0648 31.32 9.0648 31.46C9.0648 31.6467 8.99013 31.81 8.8408 31.95C8.43013 32.3233 7.9448 32.6127 7.3848 32.818C6.83413 33.014 6.24613 33.112 5.6208 33.112ZM13.3907 26.014C15.0987 26.014 15.9527 26.91 15.9527 28.702V32.51C15.9527 32.678 15.9014 32.8133 15.7987 32.916C15.7054 33.0187 15.5747 33.07 15.4067 33.07C15.2387 33.07 15.1034 33.0187 15.0007 32.916C14.898 32.8133 14.8467 32.678 14.8467 32.51V31.838C14.6694 32.2393 14.3987 32.552 14.0347 32.776C13.6707 32.9907 13.2507 33.098 12.7747 33.098C12.336 33.098 11.93 33.0093 11.5567 32.832C11.1927 32.6547 10.9034 32.4073 10.6887 32.09C10.474 31.7727 10.3667 31.4227 10.3667 31.04C10.3667 30.5267 10.4974 30.13 10.7587 29.85C11.02 29.5607 11.4494 29.3553 12.0467 29.234C12.644 29.1033 13.4747 29.038 14.5387 29.038H14.8467V28.576C14.8467 28.016 14.73 27.6053 14.4967 27.344C14.2727 27.0827 13.904 26.952 13.3907 26.952C12.756 26.952 12.112 27.1247 11.4587 27.47C11.2067 27.6287 11.0294 27.708 10.9267 27.708C10.8147 27.708 10.7214 27.666 10.6467 27.582C10.572 27.498 10.5347 27.3907 10.5347 27.26C10.5347 27.1293 10.572 27.0173 10.6467 26.924C10.7307 26.8213 10.8614 26.7187 11.0387 26.616C11.3654 26.4293 11.734 26.2847 12.1447 26.182C12.5647 26.07 12.98 26.014 13.3907 26.014ZM12.9287 32.202C13.4887 32.202 13.946 32.0153 14.3007 31.642C14.6647 31.2593 14.8467 30.7693 14.8467 30.172V29.766H14.5947C13.7734 29.766 13.148 29.8033 12.7187 29.878C12.2894 29.9433 11.9814 30.06 11.7947 30.228C11.6174 30.3867 11.5287 30.6247 11.5287 30.942C11.5287 31.306 11.6594 31.6093 11.9207 31.852C12.1914 32.0853 12.5274 32.202 12.9287 32.202ZM21.4025 26.042C21.7945 26.014 21.9905 26.1727 21.9905 26.518C21.9905 26.6673 21.9485 26.7887 21.8645 26.882C21.7805 26.966 21.6358 27.0173 21.4305 27.036L21.0105 27.078C20.3852 27.134 19.9185 27.358 19.6105 27.75C19.3118 28.1327 19.1625 28.5853 19.1625 29.108V32.51C19.1625 32.6967 19.1112 32.8367 19.0085 32.93C18.9058 33.0233 18.7705 33.07 18.6025 33.07C18.4345 33.07 18.2945 33.0233 18.1825 32.93C18.0798 32.8273 18.0285 32.6873 18.0285 32.51V26.602C18.0285 26.4247 18.0845 26.2893 18.1965 26.196C18.3085 26.0933 18.4438 26.042 18.6025 26.042C18.7518 26.042 18.8778 26.0933 18.9805 26.196C19.0832 26.2893 19.1345 26.42 19.1345 26.588V27.372C19.3305 26.9613 19.6058 26.6487 19.9605 26.434C20.3245 26.2193 20.7398 26.0933 21.2065 26.056L21.4025 26.042ZM26.3381 26.042C26.7301 26.014 26.9261 26.1727 26.9261 26.518C26.9261 26.6673 26.8841 26.7887 26.8001 26.882C26.7161 26.966 26.5714 27.0173 26.3661 27.036L25.9461 27.078C25.3207 27.134 24.8541 27.358 24.5461 27.75C24.2474 28.1327 24.0981 28.5853 24.0981 29.108V32.51C24.0981 32.6967 24.0467 32.8367 23.9441 32.93C23.8414 33.0233 23.7061 33.07 23.5381 33.07C23.3701 33.07 23.2301 33.0233 23.1181 32.93C23.0154 32.8273 22.9641 32.6873 22.9641 32.51V26.602C22.9641 26.4247 23.0201 26.2893 23.1321 26.196C23.2441 26.0933 23.3794 26.042 23.5381 26.042C23.6874 26.042 23.8134 26.0933 23.9161 26.196C24.0187 26.2893 24.0701 26.42 24.0701 26.588V27.372C24.2661 26.9613 24.5414 26.6487 24.8961 26.434C25.2601 26.2193 25.6754 26.0933 26.1421 26.056L26.3381 26.042ZM28.4736 33.07C28.3056 33.07 28.1656 33.0233 28.0536 32.93C27.9509 32.8273 27.8996 32.6873 27.8996 32.51V26.602C27.8996 26.4247 27.9509 26.2893 28.0536 26.196C28.1656 26.0933 28.3056 26.042 28.4736 26.042C28.6416 26.042 28.7769 26.0933 28.8796 26.196C28.9823 26.2893 29.0336 26.4247 29.0336 26.602V32.51C29.0336 32.6967 28.9823 32.8367 28.8796 32.93C28.7769 33.0233 28.6416 33.07 28.4736 33.07ZM28.4736 24.572C28.2496 24.572 28.0676 24.5067 27.9276 24.376C27.7876 24.2453 27.7176 24.0727 27.7176 23.858C27.7176 23.6527 27.7876 23.4847 27.9276 23.354C28.0676 23.2233 28.2496 23.158 28.4736 23.158C28.6976 23.158 28.8796 23.2233 29.0196 23.354C29.1596 23.4847 29.2296 23.6527 29.2296 23.858C29.2296 24.0727 29.1596 24.2453 29.0196 24.376C28.8796 24.5067 28.6976 24.572 28.4736 24.572ZM34.5835 26.014C36.2168 26.014 37.0335 26.9147 37.0335 28.716V32.51C37.0335 32.6873 36.9822 32.8273 36.8795 32.93C36.7862 33.0233 36.6508 33.07 36.4735 33.07C36.2962 33.07 36.1562 33.0233 36.0535 32.93C35.9508 32.8273 35.8995 32.6873 35.8995 32.51V28.786C35.8995 28.1513 35.7735 27.6893 35.5215 27.4C35.2788 27.1107 34.8868 26.966 34.3455 26.966C33.7202 26.966 33.2208 27.1573 32.8475 27.54C32.4742 27.9227 32.2875 28.4407 32.2875 29.094V32.51C32.2875 32.6873 32.2362 32.8273 32.1335 32.93C32.0402 33.0233 31.9048 33.07 31.7275 33.07C31.5502 33.07 31.4102 33.0233 31.3075 32.93C31.2048 32.8273 31.1535 32.6873 31.1535 32.51V26.602C31.1535 26.434 31.2048 26.2987 31.3075 26.196C31.4102 26.0933 31.5502 26.042 31.7275 26.042C31.8955 26.042 32.0262 26.0933 32.1195 26.196C32.2222 26.2987 32.2735 26.4293 32.2735 26.588V27.302C32.4975 26.882 32.8102 26.5647 33.2115 26.35C33.6128 26.126 34.0702 26.014 34.5835 26.014ZM42.5545 26.014C43.3572 26.014 43.9639 26.2427 44.3745 26.7C44.7852 27.148 44.9905 27.82 44.9905 28.716V32.51C44.9905 32.6873 44.9392 32.8273 44.8365 32.93C44.7339 33.0233 44.5985 33.07 44.4305 33.07C44.2532 33.07 44.1132 33.0233 44.0105 32.93C43.9079 32.8273 43.8565 32.6873 43.8565 32.51V28.744C43.8565 28.1373 43.7305 27.6893 43.4785 27.4C43.2359 27.1107 42.8439 26.966 42.3025 26.966C41.6772 26.966 41.1779 27.1573 40.8045 27.54C40.4312 27.9227 40.2445 28.4407 40.2445 29.094V32.51C40.2445 32.6873 40.1932 32.8273 40.0905 32.93C39.9972 33.0233 39.8619 33.07 39.6845 33.07C39.5072 33.07 39.3672 33.0233 39.2645 32.93C39.1619 32.8273 39.1105 32.6873 39.1105 32.51V23.606C39.1105 23.4473 39.1619 23.3167 39.2645 23.214C39.3765 23.1113 39.5165 23.06 39.6845 23.06C39.8619 23.06 39.9972 23.1113 40.0905 23.214C40.1932 23.3073 40.2445 23.438 40.2445 23.606V27.274C40.4685 26.8633 40.7812 26.5507 41.1825 26.336C41.5839 26.1213 42.0412 26.014 42.5545 26.014ZM49.8956 33.098C49.2516 33.098 48.6822 32.9533 48.1876 32.664C47.7022 32.3747 47.3242 31.964 47.0536 31.432C46.7922 30.8907 46.6616 30.2653 46.6616 29.556C46.6616 28.8467 46.7922 28.226 47.0536 27.694C47.3242 27.1527 47.7022 26.7373 48.1876 26.448C48.6822 26.1587 49.2516 26.014 49.8956 26.014C50.5396 26.014 51.1089 26.1587 51.6036 26.448C52.0982 26.7373 52.4762 27.1527 52.7376 27.694C53.0082 28.226 53.1436 28.8467 53.1436 29.556C53.1436 30.2653 53.0082 30.8907 52.7376 31.432C52.4762 31.964 52.0982 32.3747 51.6036 32.664C51.1089 32.9533 50.5396 33.098 49.8956 33.098ZM49.8956 32.16C50.5676 32.16 51.0809 31.9407 51.4356 31.502C51.7996 31.054 51.9816 30.4053 51.9816 29.556C51.9816 28.7253 51.7996 28.086 51.4356 27.638C51.0716 27.1807 50.5582 26.952 49.8956 26.952C49.2329 26.952 48.7196 27.1807 48.3556 27.638C47.9916 28.086 47.8096 28.7253 47.8096 29.556C47.8096 30.396 47.9869 31.04 48.3416 31.488C48.7056 31.936 49.2236 32.16 49.8956 32.16Z"
                  fill="#380F52"
                />
              </svg>
            </button>

            <button
              className="header-button-descktop"
              onClick={() => history.push("/dashboard/user")}
            >
              <svg
                width="40"
                height="31"
                viewBox="0 0 40 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0733 15.56V11.6017H21.24V15.56C21.24 15.9955 21.5962 16.3517 22.0316 16.3517H24.4066C24.842 16.3517 25.1983 15.9955 25.1983 15.56V10.0184H26.5441C26.9083 10.0184 27.0825 9.56713 26.8054 9.32963L20.187 3.36838C19.8862 3.09921 19.427 3.09921 19.1262 3.36838L12.5079 9.32963C12.2387 9.56713 12.405 10.0184 12.7691 10.0184H14.115V15.56C14.115 15.9955 14.4712 16.3517 14.9066 16.3517H17.2816C17.717 16.3517 18.0733 15.9955 18.0733 15.56Z"
                  fill="#380F52"
                />
                <path
                  d="M9.99416 20.06C10.1715 20.06 10.3068 20.116 10.4002 20.228C10.5028 20.3307 10.5542 20.4707 10.5542 20.648V29.482C10.5542 29.6593 10.5028 29.804 10.4002 29.916C10.3068 30.0187 10.1715 30.07 9.99416 30.07C9.81682 30.07 9.67682 30.0187 9.57416 29.916C9.47149 29.804 9.42016 29.6593 9.42016 29.482V25.478H3.51216V29.482C3.51216 29.6593 3.46082 29.804 3.35816 29.916C3.25549 30.0187 3.11549 30.07 2.93816 30.07C2.76082 30.07 2.62082 30.0187 2.51816 29.916C2.42482 29.804 2.37816 29.6593 2.37816 29.482V20.648C2.37816 20.4707 2.42482 20.3307 2.51816 20.228C2.62082 20.116 2.76082 20.06 2.93816 20.06C3.11549 20.06 3.25549 20.116 3.35816 20.228C3.46082 20.3307 3.51216 20.4707 3.51216 20.648V24.498H9.42016V20.648C9.42016 20.4707 9.47149 20.3307 9.57416 20.228C9.67682 20.116 9.81682 20.06 9.99416 20.06ZM15.6475 30.098C15.0035 30.098 14.4342 29.9533 13.9395 29.664C13.4542 29.3747 13.0762 28.964 12.8055 28.432C12.5442 27.8907 12.4135 27.2653 12.4135 26.556C12.4135 25.8467 12.5442 25.226 12.8055 24.694C13.0762 24.1527 13.4542 23.7373 13.9395 23.448C14.4342 23.1587 15.0035 23.014 15.6475 23.014C16.2915 23.014 16.8609 23.1587 17.3555 23.448C17.8502 23.7373 18.2282 24.1527 18.4895 24.694C18.7602 25.226 18.8955 25.8467 18.8955 26.556C18.8955 27.2653 18.7602 27.8907 18.4895 28.432C18.2282 28.964 17.8502 29.3747 17.3555 29.664C16.8609 29.9533 16.2915 30.098 15.6475 30.098ZM15.6475 29.16C16.3195 29.16 16.8329 28.9407 17.1875 28.502C17.5515 28.054 17.7335 27.4053 17.7335 26.556C17.7335 25.7253 17.5515 25.086 17.1875 24.638C16.8235 24.1807 16.3102 23.952 15.6475 23.952C14.9849 23.952 14.4715 24.1807 14.1075 24.638C13.7435 25.086 13.5615 25.7253 13.5615 26.556C13.5615 27.396 13.7389 28.04 14.0935 28.488C14.4575 28.936 14.9755 29.16 15.6475 29.16ZM28.1732 23.014C29.6852 23.014 30.4412 23.9147 30.4412 25.716V29.51C30.4412 29.6873 30.3898 29.8273 30.2872 29.93C30.1845 30.0233 30.0492 30.07 29.8812 30.07C29.7132 30.07 29.5732 30.0233 29.4612 29.93C29.3585 29.8273 29.3072 29.6873 29.3072 29.51V25.744C29.3072 25.1187 29.1952 24.666 28.9712 24.386C28.7472 24.106 28.3972 23.966 27.9212 23.966C27.3518 23.966 26.9038 24.1573 26.5772 24.54C26.2505 24.9227 26.0872 25.4407 26.0872 26.094V29.51C26.0872 29.6873 26.0312 29.8273 25.9192 29.93C25.8165 30.0233 25.6812 30.07 25.5132 30.07C25.3452 30.07 25.2098 30.0233 25.1072 29.93C25.0045 29.8273 24.9532 29.6873 24.9532 29.51V25.744C24.9532 25.1187 24.8412 24.666 24.6172 24.386C24.3932 24.106 24.0385 23.966 23.5532 23.966C22.9932 23.966 22.5452 24.1573 22.2092 24.54C21.8825 24.9227 21.7192 25.4407 21.7192 26.094V29.51C21.7192 29.6873 21.6678 29.8273 21.5652 29.93C21.4625 30.0233 21.3272 30.07 21.1592 30.07C20.9912 30.07 20.8512 30.0233 20.7392 29.93C20.6365 29.8273 20.5852 29.6873 20.5852 29.51V23.602C20.5852 23.434 20.6365 23.2987 20.7392 23.196C20.8512 23.0933 20.9912 23.042 21.1592 23.042C21.3178 23.042 21.4485 23.0933 21.5512 23.196C21.6538 23.2893 21.7052 23.42 21.7052 23.588V24.26C21.9105 23.8587 22.1952 23.5507 22.5592 23.336C22.9232 23.1213 23.3432 23.014 23.8192 23.014C24.8832 23.014 25.5785 23.462 25.9052 24.358C26.1012 23.9473 26.3998 23.6207 26.8012 23.378C27.2025 23.1353 27.6598 23.014 28.1732 23.014ZM37.785 28.418C37.8877 28.418 37.9764 28.46 38.051 28.544C38.1257 28.628 38.163 28.7353 38.163 28.866C38.163 29.0993 37.9997 29.314 37.673 29.51C37.337 29.706 36.9824 29.8553 36.609 29.958C36.2357 30.0513 35.8717 30.098 35.517 30.098C34.4624 30.098 33.627 29.7853 33.011 29.16C32.4044 28.5347 32.101 27.6713 32.101 26.57C32.101 25.87 32.2364 25.254 32.507 24.722C32.7777 24.1807 33.1557 23.7607 33.641 23.462C34.1357 23.1633 34.6957 23.014 35.321 23.014C36.2077 23.014 36.9124 23.3033 37.435 23.882C37.9577 24.4607 38.219 25.2447 38.219 26.234C38.219 26.4207 38.1817 26.556 38.107 26.64C38.0324 26.724 37.911 26.766 37.743 26.766H33.235C33.319 28.3713 34.0797 29.174 35.517 29.174C35.881 29.174 36.1937 29.1273 36.455 29.034C36.7164 28.9313 36.9964 28.796 37.295 28.628C37.5377 28.488 37.701 28.418 37.785 28.418ZM35.335 23.896C34.7377 23.896 34.257 24.0827 33.893 24.456C33.5384 24.8293 33.3284 25.3567 33.263 26.038H37.225C37.2064 25.3473 37.0337 24.82 36.707 24.456C36.3804 24.0827 35.923 23.896 35.335 23.896Z"
                  fill="#380F52"
                />
              </svg>
            </button>

            <button
              className="header-button-descktop"
              onClick={() => history.push("/profile/user")}
            >
              <svg
                width="34"
                height="32"
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8C19.21 8 21 6.21 21 4C21 1.79 19.21 0 17 0C14.79 0 13 1.79 13 4C13 6.21 14.79 8 17 8ZM17 10C14.33 10 9 11.34 9 14V15C9 15.55 9.45 16 10 16H24C24.55 16 25 15.55 25 15V14C25 11.34 19.67 10 17 10Z"
                  fill="#380F52"
                />
                <path
                  d="M2.41993 31.07C2.2426 31.07 2.1026 31.0187 1.99993 30.916C1.89726 30.804 1.84593 30.6593 1.84593 30.482V21.69C1.84593 21.522 1.89726 21.3867 1.99993 21.284C2.11193 21.1813 2.2566 21.13 2.43393 21.13H5.75193C6.78793 21.13 7.5906 21.382 8.15993 21.886C8.7386 22.39 9.02793 23.104 9.02793 24.028C9.02793 24.952 8.7386 25.6707 8.15993 26.184C7.58126 26.6973 6.7786 26.954 5.75193 26.954H2.99393V30.482C2.99393 30.6593 2.9426 30.804 2.83993 30.916C2.73726 31.0187 2.59726 31.07 2.41993 31.07ZM5.63993 26.002C7.1426 26.002 7.89393 25.344 7.89393 24.028C7.89393 22.7307 7.1426 22.082 5.63993 22.082H2.99393V26.002H5.63993ZM15.7606 29.418C15.8633 29.418 15.952 29.46 16.0266 29.544C16.1013 29.628 16.1386 29.7353 16.1386 29.866C16.1386 30.0993 15.9753 30.314 15.6486 30.51C15.3126 30.706 14.958 30.8553 14.5846 30.958C14.2113 31.0513 13.8473 31.098 13.4926 31.098C12.438 31.098 11.6026 30.7853 10.9866 30.16C10.38 29.5347 10.0766 28.6713 10.0766 27.57C10.0766 26.87 10.212 26.254 10.4826 25.722C10.7533 25.1807 11.1313 24.7607 11.6166 24.462C12.1113 24.1633 12.6713 24.014 13.2966 24.014C14.1833 24.014 14.888 24.3033 15.4106 24.882C15.9333 25.4607 16.1946 26.2447 16.1946 27.234C16.1946 27.4207 16.1573 27.556 16.0826 27.64C16.008 27.724 15.8866 27.766 15.7186 27.766H11.2106C11.2946 29.3713 12.0553 30.174 13.4926 30.174C13.8566 30.174 14.1693 30.1273 14.4306 30.034C14.692 29.9313 14.972 29.796 15.2706 29.628C15.5133 29.488 15.6766 29.418 15.7606 29.418ZM13.3106 24.896C12.7133 24.896 12.2326 25.0827 11.8686 25.456C11.514 25.8293 11.304 26.3567 11.2386 27.038H15.2006C15.182 26.3473 15.0093 25.82 14.6826 25.456C14.356 25.0827 13.8986 24.896 13.3106 24.896ZM21.2394 24.042C21.6314 24.014 21.8274 24.1727 21.8274 24.518C21.8274 24.6673 21.7854 24.7887 21.7014 24.882C21.6174 24.966 21.4728 25.0173 21.2674 25.036L20.8474 25.078C20.2221 25.134 19.7554 25.358 19.4474 25.75C19.1488 26.1327 18.9994 26.5853 18.9994 27.108V30.51C18.9994 30.6967 18.9481 30.8367 18.8454 30.93C18.7428 31.0233 18.6074 31.07 18.4394 31.07C18.2714 31.07 18.1314 31.0233 18.0194 30.93C17.9168 30.8273 17.8654 30.6873 17.8654 30.51V24.602C17.8654 24.4247 17.9214 24.2893 18.0334 24.196C18.1454 24.0933 18.2808 24.042 18.4394 24.042C18.5888 24.042 18.7148 24.0933 18.8174 24.196C18.9201 24.2893 18.9714 24.42 18.9714 24.588V25.372C19.1674 24.9613 19.4428 24.6487 19.7974 24.434C20.1614 24.2193 20.5768 24.0933 21.0434 24.056L21.2394 24.042ZM28.5699 24.182C28.7285 24.182 28.8499 24.224 28.9339 24.308C29.0179 24.392 29.0599 24.504 29.0599 24.644V30.51C29.0599 30.6873 29.0039 30.8273 28.8919 30.93C28.7892 31.0233 28.6585 31.07 28.4999 31.07C28.3319 31.07 28.1919 31.0233 28.0799 30.93C27.9772 30.8273 27.9259 30.6873 27.9259 30.51V25.078H24.8599V30.51C24.8599 30.6873 24.8039 30.8273 24.6919 30.93C24.5892 31.0233 24.4585 31.07 24.2999 31.07C24.1319 31.07 23.9919 31.0233 23.8799 30.93C23.7772 30.8273 23.7259 30.6873 23.7259 30.51V25.078H22.7879C22.6292 25.078 22.5032 25.0407 22.4099 24.966C22.3259 24.882 22.2839 24.7747 22.2839 24.644C22.2839 24.504 22.3259 24.392 22.4099 24.308C22.5032 24.224 22.6292 24.182 22.7879 24.182H23.7259V23.944C23.7259 23.104 23.9359 22.446 24.3559 21.97C24.7759 21.4847 25.3779 21.2093 26.1619 21.144L26.4979 21.116C26.9459 21.0787 27.1699 21.2187 27.1699 21.536C27.1699 21.8067 27.0112 21.9607 26.6939 21.998L26.3579 22.026C25.8632 22.0633 25.4899 22.222 25.2379 22.502C24.9859 22.7727 24.8599 23.1833 24.8599 23.734V24.182H28.5699ZM28.4999 21.158C28.7145 21.158 28.8919 21.2233 29.0319 21.354C29.1812 21.4847 29.2559 21.6527 29.2559 21.858C29.2559 22.0727 29.1859 22.2453 29.0459 22.376C28.9059 22.5067 28.7239 22.572 28.4999 22.572C28.2759 22.572 28.0939 22.5067 27.9539 22.376C27.8139 22.2453 27.7439 22.0727 27.7439 21.858C27.7439 21.6527 27.8139 21.4847 27.9539 21.354C28.0939 21.2233 28.2759 21.158 28.4999 21.158ZM31.7422 31.07C31.5742 31.07 31.4342 31.0233 31.3222 30.93C31.2195 30.8273 31.1682 30.6873 31.1682 30.51V21.62C31.1682 21.4427 31.2195 21.3073 31.3222 21.214C31.4342 21.1113 31.5742 21.06 31.7422 21.06C31.9008 21.06 32.0315 21.1113 32.1342 21.214C32.2462 21.3073 32.3022 21.4427 32.3022 21.62V30.51C32.3022 30.6873 32.2462 30.8273 32.1342 30.93C32.0315 31.0233 31.9008 31.07 31.7422 31.07Z"
                  fill="#380F52"
                />
              </svg>
            </button>
          </>

          <button
            className="header-button"
            onClick={() => {
              clearToken();
              history.push("/");
            }}
          >
            <svg
              width="34"
              height="40"
              viewBox="0 0 34 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="16.5933"
                cy="19.5455"
                rx="16.5215"
                ry="19.5455"
                fill="#0EC977"
              />
              <path
                d="M8.56261 31C7.94394 31 7.45327 30.8293 7.09061 30.488C6.74927 30.1467 6.57861 29.6667 6.57861 29.048V10.392C6.57861 9.77333 6.74927 9.29333 7.09061 8.952C7.45327 8.61067 7.94394 8.44 8.56261 8.44H14.8986C18.5893 8.44 21.4479 9.432 23.4746 11.416C25.5226 13.3787 26.5466 16.1413 26.5466 19.704C26.5466 23.288 25.5226 26.072 23.4746 28.056C21.4479 30.0187 18.5893 31 14.8986 31H8.56261ZM14.6426 27.64C19.8266 27.64 22.4186 24.9947 22.4186 19.704C22.4186 14.4347 19.8266 11.8 14.6426 11.8H10.7066V27.64H14.6426Z"
                fill="#C2F244"
              />
            </svg>
          </button>
        </>
      ) : (
        <>
          <button
            className="header-button"
            onClick={() => history.push("/dashboard/store")}
          >
            <svg
              width="34"
              height="40"
              viewBox="0 0 34 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.4283 19.5455C33.4283 30.146 26.1797 38.5909 17.4068 38.5909C8.6338 38.5909 1.38525 30.146 1.38525 19.5455C1.38525 8.94487 8.6338 0.5 17.4068 0.5C26.1797 0.5 33.4283 8.94487 33.4283 19.5455Z"
                fill="#F6F2F9"
                stroke="#380F52"
              />
              <path
                d="M26.0335 8.28C26.6308 8.28 27.1108 8.472 27.4735 8.856C27.8361 9.21867 28.0175 9.70933 28.0175 10.328V29.272C28.0175 29.8693 27.8468 30.3387 27.5055 30.68C27.1641 31.0213 26.7161 31.192 26.1615 31.192C25.6068 31.192 25.1695 31.0213 24.8495 30.68C24.5295 30.3387 24.3695 29.8693 24.3695 29.272V16.088L18.9295 26.392C18.6735 26.8613 18.3961 27.2133 18.0975 27.448C17.7988 27.6613 17.4468 27.768 17.0415 27.768C16.6361 27.768 16.2841 27.6613 15.9855 27.448C15.6868 27.2347 15.4095 26.8827 15.1535 26.392L9.68145 16.248V29.272C9.68145 29.848 9.51079 30.3173 9.16945 30.68C8.84945 31.0213 8.41212 31.192 7.85745 31.192C7.30279 31.192 6.86545 31.0213 6.54545 30.68C6.22545 30.3387 6.06545 29.8693 6.06545 29.272V10.328C6.06545 9.70933 6.23612 9.21867 6.57745 8.856C6.94012 8.472 7.42012 8.28 8.01745 8.28C8.84945 8.28 9.50012 8.73867 9.96945 9.656L17.0735 23.192L24.1455 9.656C24.6148 8.73867 25.2441 8.28 26.0335 8.28Z"
                fill="#380F52"
              />
            </svg>
          </button>

          <button
            className="header-button-descktop"
            onClick={() => history.push("/profile/store")}
          >
            <svg
              width="34"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 8C19.21 8 21 6.21 21 4C21 1.79 19.21 0 17 0C14.79 0 13 1.79 13 4C13 6.21 14.79 8 17 8ZM17 10C14.33 10 9 11.34 9 14V15C9 15.55 9.45 16 10 16H24C24.55 16 25 15.55 25 15V14C25 11.34 19.67 10 17 10Z"
                fill="#380F52"
              />
              <path
                d="M2.41993 31.07C2.2426 31.07 2.1026 31.0187 1.99993 30.916C1.89726 30.804 1.84593 30.6593 1.84593 30.482V21.69C1.84593 21.522 1.89726 21.3867 1.99993 21.284C2.11193 21.1813 2.2566 21.13 2.43393 21.13H5.75193C6.78793 21.13 7.5906 21.382 8.15993 21.886C8.7386 22.39 9.02793 23.104 9.02793 24.028C9.02793 24.952 8.7386 25.6707 8.15993 26.184C7.58126 26.6973 6.7786 26.954 5.75193 26.954H2.99393V30.482C2.99393 30.6593 2.9426 30.804 2.83993 30.916C2.73726 31.0187 2.59726 31.07 2.41993 31.07ZM5.63993 26.002C7.1426 26.002 7.89393 25.344 7.89393 24.028C7.89393 22.7307 7.1426 22.082 5.63993 22.082H2.99393V26.002H5.63993ZM15.7606 29.418C15.8633 29.418 15.952 29.46 16.0266 29.544C16.1013 29.628 16.1386 29.7353 16.1386 29.866C16.1386 30.0993 15.9753 30.314 15.6486 30.51C15.3126 30.706 14.958 30.8553 14.5846 30.958C14.2113 31.0513 13.8473 31.098 13.4926 31.098C12.438 31.098 11.6026 30.7853 10.9866 30.16C10.38 29.5347 10.0766 28.6713 10.0766 27.57C10.0766 26.87 10.212 26.254 10.4826 25.722C10.7533 25.1807 11.1313 24.7607 11.6166 24.462C12.1113 24.1633 12.6713 24.014 13.2966 24.014C14.1833 24.014 14.888 24.3033 15.4106 24.882C15.9333 25.4607 16.1946 26.2447 16.1946 27.234C16.1946 27.4207 16.1573 27.556 16.0826 27.64C16.008 27.724 15.8866 27.766 15.7186 27.766H11.2106C11.2946 29.3713 12.0553 30.174 13.4926 30.174C13.8566 30.174 14.1693 30.1273 14.4306 30.034C14.692 29.9313 14.972 29.796 15.2706 29.628C15.5133 29.488 15.6766 29.418 15.7606 29.418ZM13.3106 24.896C12.7133 24.896 12.2326 25.0827 11.8686 25.456C11.514 25.8293 11.304 26.3567 11.2386 27.038H15.2006C15.182 26.3473 15.0093 25.82 14.6826 25.456C14.356 25.0827 13.8986 24.896 13.3106 24.896ZM21.2394 24.042C21.6314 24.014 21.8274 24.1727 21.8274 24.518C21.8274 24.6673 21.7854 24.7887 21.7014 24.882C21.6174 24.966 21.4728 25.0173 21.2674 25.036L20.8474 25.078C20.2221 25.134 19.7554 25.358 19.4474 25.75C19.1488 26.1327 18.9994 26.5853 18.9994 27.108V30.51C18.9994 30.6967 18.9481 30.8367 18.8454 30.93C18.7428 31.0233 18.6074 31.07 18.4394 31.07C18.2714 31.07 18.1314 31.0233 18.0194 30.93C17.9168 30.8273 17.8654 30.6873 17.8654 30.51V24.602C17.8654 24.4247 17.9214 24.2893 18.0334 24.196C18.1454 24.0933 18.2808 24.042 18.4394 24.042C18.5888 24.042 18.7148 24.0933 18.8174 24.196C18.9201 24.2893 18.9714 24.42 18.9714 24.588V25.372C19.1674 24.9613 19.4428 24.6487 19.7974 24.434C20.1614 24.2193 20.5768 24.0933 21.0434 24.056L21.2394 24.042ZM28.5699 24.182C28.7285 24.182 28.8499 24.224 28.9339 24.308C29.0179 24.392 29.0599 24.504 29.0599 24.644V30.51C29.0599 30.6873 29.0039 30.8273 28.8919 30.93C28.7892 31.0233 28.6585 31.07 28.4999 31.07C28.3319 31.07 28.1919 31.0233 28.0799 30.93C27.9772 30.8273 27.9259 30.6873 27.9259 30.51V25.078H24.8599V30.51C24.8599 30.6873 24.8039 30.8273 24.6919 30.93C24.5892 31.0233 24.4585 31.07 24.2999 31.07C24.1319 31.07 23.9919 31.0233 23.8799 30.93C23.7772 30.8273 23.7259 30.6873 23.7259 30.51V25.078H22.7879C22.6292 25.078 22.5032 25.0407 22.4099 24.966C22.3259 24.882 22.2839 24.7747 22.2839 24.644C22.2839 24.504 22.3259 24.392 22.4099 24.308C22.5032 24.224 22.6292 24.182 22.7879 24.182H23.7259V23.944C23.7259 23.104 23.9359 22.446 24.3559 21.97C24.7759 21.4847 25.3779 21.2093 26.1619 21.144L26.4979 21.116C26.9459 21.0787 27.1699 21.2187 27.1699 21.536C27.1699 21.8067 27.0112 21.9607 26.6939 21.998L26.3579 22.026C25.8632 22.0633 25.4899 22.222 25.2379 22.502C24.9859 22.7727 24.8599 23.1833 24.8599 23.734V24.182H28.5699ZM28.4999 21.158C28.7145 21.158 28.8919 21.2233 29.0319 21.354C29.1812 21.4847 29.2559 21.6527 29.2559 21.858C29.2559 22.0727 29.1859 22.2453 29.0459 22.376C28.9059 22.5067 28.7239 22.572 28.4999 22.572C28.2759 22.572 28.0939 22.5067 27.9539 22.376C27.8139 22.2453 27.7439 22.0727 27.7439 21.858C27.7439 21.6527 27.8139 21.4847 27.9539 21.354C28.0939 21.2233 28.2759 21.158 28.4999 21.158ZM31.7422 31.07C31.5742 31.07 31.4342 31.0233 31.3222 30.93C31.2195 30.8273 31.1682 30.6873 31.1682 30.51V21.62C31.1682 21.4427 31.2195 21.3073 31.3222 21.214C31.4342 21.1113 31.5742 21.06 31.7422 21.06C31.9008 21.06 32.0315 21.1113 32.1342 21.214C32.2462 21.3073 32.3022 21.4427 32.3022 21.62V30.51C32.3022 30.6873 32.2462 30.8273 32.1342 30.93C32.0315 31.0233 31.9008 31.07 31.7422 31.07Z"
                fill="#380F52"
              />
            </svg>
          </button>

          <button
            className="header-button-descktop"
            onClick={() => history.push("/dashboard/store")}
          >
            <svg
              width="40"
              height="31"
              viewBox="0 0 40 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0733 15.56V11.6017H21.24V15.56C21.24 15.9955 21.5962 16.3517 22.0316 16.3517H24.4066C24.842 16.3517 25.1983 15.9955 25.1983 15.56V10.0184H26.5441C26.9083 10.0184 27.0825 9.56713 26.8054 9.32963L20.187 3.36838C19.8862 3.09921 19.427 3.09921 19.1262 3.36838L12.5079 9.32963C12.2387 9.56713 12.405 10.0184 12.7691 10.0184H14.115V15.56C14.115 15.9955 14.4712 16.3517 14.9066 16.3517H17.2816C17.717 16.3517 18.0733 15.9955 18.0733 15.56Z"
                fill="#380F52"
              />
              <path
                d="M9.99416 20.06C10.1715 20.06 10.3068 20.116 10.4002 20.228C10.5028 20.3307 10.5542 20.4707 10.5542 20.648V29.482C10.5542 29.6593 10.5028 29.804 10.4002 29.916C10.3068 30.0187 10.1715 30.07 9.99416 30.07C9.81682 30.07 9.67682 30.0187 9.57416 29.916C9.47149 29.804 9.42016 29.6593 9.42016 29.482V25.478H3.51216V29.482C3.51216 29.6593 3.46082 29.804 3.35816 29.916C3.25549 30.0187 3.11549 30.07 2.93816 30.07C2.76082 30.07 2.62082 30.0187 2.51816 29.916C2.42482 29.804 2.37816 29.6593 2.37816 29.482V20.648C2.37816 20.4707 2.42482 20.3307 2.51816 20.228C2.62082 20.116 2.76082 20.06 2.93816 20.06C3.11549 20.06 3.25549 20.116 3.35816 20.228C3.46082 20.3307 3.51216 20.4707 3.51216 20.648V24.498H9.42016V20.648C9.42016 20.4707 9.47149 20.3307 9.57416 20.228C9.67682 20.116 9.81682 20.06 9.99416 20.06ZM15.6475 30.098C15.0035 30.098 14.4342 29.9533 13.9395 29.664C13.4542 29.3747 13.0762 28.964 12.8055 28.432C12.5442 27.8907 12.4135 27.2653 12.4135 26.556C12.4135 25.8467 12.5442 25.226 12.8055 24.694C13.0762 24.1527 13.4542 23.7373 13.9395 23.448C14.4342 23.1587 15.0035 23.014 15.6475 23.014C16.2915 23.014 16.8609 23.1587 17.3555 23.448C17.8502 23.7373 18.2282 24.1527 18.4895 24.694C18.7602 25.226 18.8955 25.8467 18.8955 26.556C18.8955 27.2653 18.7602 27.8907 18.4895 28.432C18.2282 28.964 17.8502 29.3747 17.3555 29.664C16.8609 29.9533 16.2915 30.098 15.6475 30.098ZM15.6475 29.16C16.3195 29.16 16.8329 28.9407 17.1875 28.502C17.5515 28.054 17.7335 27.4053 17.7335 26.556C17.7335 25.7253 17.5515 25.086 17.1875 24.638C16.8235 24.1807 16.3102 23.952 15.6475 23.952C14.9849 23.952 14.4715 24.1807 14.1075 24.638C13.7435 25.086 13.5615 25.7253 13.5615 26.556C13.5615 27.396 13.7389 28.04 14.0935 28.488C14.4575 28.936 14.9755 29.16 15.6475 29.16ZM28.1732 23.014C29.6852 23.014 30.4412 23.9147 30.4412 25.716V29.51C30.4412 29.6873 30.3898 29.8273 30.2872 29.93C30.1845 30.0233 30.0492 30.07 29.8812 30.07C29.7132 30.07 29.5732 30.0233 29.4612 29.93C29.3585 29.8273 29.3072 29.6873 29.3072 29.51V25.744C29.3072 25.1187 29.1952 24.666 28.9712 24.386C28.7472 24.106 28.3972 23.966 27.9212 23.966C27.3518 23.966 26.9038 24.1573 26.5772 24.54C26.2505 24.9227 26.0872 25.4407 26.0872 26.094V29.51C26.0872 29.6873 26.0312 29.8273 25.9192 29.93C25.8165 30.0233 25.6812 30.07 25.5132 30.07C25.3452 30.07 25.2098 30.0233 25.1072 29.93C25.0045 29.8273 24.9532 29.6873 24.9532 29.51V25.744C24.9532 25.1187 24.8412 24.666 24.6172 24.386C24.3932 24.106 24.0385 23.966 23.5532 23.966C22.9932 23.966 22.5452 24.1573 22.2092 24.54C21.8825 24.9227 21.7192 25.4407 21.7192 26.094V29.51C21.7192 29.6873 21.6678 29.8273 21.5652 29.93C21.4625 30.0233 21.3272 30.07 21.1592 30.07C20.9912 30.07 20.8512 30.0233 20.7392 29.93C20.6365 29.8273 20.5852 29.6873 20.5852 29.51V23.602C20.5852 23.434 20.6365 23.2987 20.7392 23.196C20.8512 23.0933 20.9912 23.042 21.1592 23.042C21.3178 23.042 21.4485 23.0933 21.5512 23.196C21.6538 23.2893 21.7052 23.42 21.7052 23.588V24.26C21.9105 23.8587 22.1952 23.5507 22.5592 23.336C22.9232 23.1213 23.3432 23.014 23.8192 23.014C24.8832 23.014 25.5785 23.462 25.9052 24.358C26.1012 23.9473 26.3998 23.6207 26.8012 23.378C27.2025 23.1353 27.6598 23.014 28.1732 23.014ZM37.785 28.418C37.8877 28.418 37.9764 28.46 38.051 28.544C38.1257 28.628 38.163 28.7353 38.163 28.866C38.163 29.0993 37.9997 29.314 37.673 29.51C37.337 29.706 36.9824 29.8553 36.609 29.958C36.2357 30.0513 35.8717 30.098 35.517 30.098C34.4624 30.098 33.627 29.7853 33.011 29.16C32.4044 28.5347 32.101 27.6713 32.101 26.57C32.101 25.87 32.2364 25.254 32.507 24.722C32.7777 24.1807 33.1557 23.7607 33.641 23.462C34.1357 23.1633 34.6957 23.014 35.321 23.014C36.2077 23.014 36.9124 23.3033 37.435 23.882C37.9577 24.4607 38.219 25.2447 38.219 26.234C38.219 26.4207 38.1817 26.556 38.107 26.64C38.0324 26.724 37.911 26.766 37.743 26.766H33.235C33.319 28.3713 34.0797 29.174 35.517 29.174C35.881 29.174 36.1937 29.1273 36.455 29.034C36.7164 28.9313 36.9964 28.796 37.295 28.628C37.5377 28.488 37.701 28.418 37.785 28.418ZM35.335 23.896C34.7377 23.896 34.257 24.0827 33.893 24.456C33.5384 24.8293 33.3284 25.3567 33.263 26.038H37.225C37.2064 25.3473 37.0337 24.82 36.707 24.456C36.3804 24.0827 35.923 23.896 35.335 23.896Z"
                fill="#380F52"
              />
            </svg>
          </button>

          <button
            className="header-button"
            onClick={() => {
              clearToken();
              history.push("/");
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#0EC977" />
              <path
                d="M17.4623 18.4593H32.5375C33.1298 18.4593 33.6143 17.9687 33.6143 17.3692C33.6143 16.7696 33.1298 16.2791 32.5375 16.2791H17.4623C16.8701 16.2791 16.3855 16.7696 16.3855 17.3692C16.3855 17.9687 16.8701 18.4593 17.4623 18.4593ZM33.7866 20.4215C33.6897 19.92 33.2482 19.5494 32.7314 19.5494H17.2685C16.7516 19.5494 16.3102 19.92 16.2132 20.4215L15.1364 25.8721C15.0072 26.5479 15.5133 27.1802 16.1917 27.1802H16.3855V32.6308C16.3855 33.2304 16.8701 33.7209 17.4623 33.7209H26.0767C26.669 33.7209 27.1535 33.2304 27.1535 32.6308V27.1802H31.4607V32.6308C31.4607 33.2304 31.9453 33.7209 32.5375 33.7209C33.1298 33.7209 33.6143 33.2304 33.6143 32.6308V27.1802H33.8082C34.4865 27.1802 34.9926 26.5479 34.8634 25.8721L33.7866 20.4215ZM24.9999 31.5407H18.5391V27.1802H24.9999V31.5407Z"
                fill="#C4FD2E"
              />
            </svg>
          </button>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
