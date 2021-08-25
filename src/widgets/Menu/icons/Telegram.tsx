import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 22 22" {...props}>
      <path
        d="M11 0C4.92537 0 0 4.92537 0 10.9883C0 17.063 4.92537 22 11 22C17.0746 22 22 17.063 22 10.9883C22 4.92537 17.0746 0 11 0ZM16.4179 6.90725C16.3476 7.9275 14.4595 15.5501 14.4595 15.5501C14.4595 15.5501 14.3422 15.9957 13.9317 16.0074C13.7911 16.0074 13.6035 15.9957 13.3924 15.7964C12.9584 15.4329 11.9734 14.7292 11.0469 14.0843C11.0117 14.1194 10.9765 14.1546 10.9296 14.1898C10.7185 14.3774 10.402 14.6471 10.0618 14.9755C9.93288 15.0927 9.79208 15.2218 9.6514 15.3625L9.63967 15.3742C9.55753 15.4563 9.48726 15.5149 9.42859 15.5618C8.97123 15.937 8.9243 15.6205 8.9243 15.4563L9.17058 12.7708V12.7473L9.18231 12.7238C9.19405 12.6887 9.21751 12.677 9.21751 12.677C9.21751 12.677 14.0139 8.40831 14.1428 7.95096C14.1546 7.9275 14.1194 7.90405 14.0608 7.9275C13.7441 8.03304 8.22068 11.5278 7.61088 11.9147C7.57569 11.9382 7.47015 11.9264 7.47015 11.9264L4.78465 11.0469C4.78465 11.0469 4.46802 10.9179 4.57356 10.6248C4.59701 10.5661 4.6322 10.5074 4.76119 10.4254C5.35927 10.0032 15.7612 6.26226 15.7612 6.26226C15.7612 6.26226 16.0544 6.16845 16.2303 6.22708C16.3124 6.26226 16.3593 6.29744 16.4061 6.41471C16.4179 6.46162 16.4296 6.55544 16.4296 6.66098C16.4296 6.71962 16.4179 6.78998 16.4179 6.90725Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
