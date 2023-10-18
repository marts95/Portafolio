import "./Footer.css";
import { FaRegCopyright, FaXTwitter } from "react-icons/fa6";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-copy">
        <h3>
          <FaRegCopyright />
          2023 Diseñado y desarrollado <br className="false"></br>por Marianella
          Torressi
        </h3>
      </div>
      <div className="redes">
        <a
          href="https://www.linkedin.com/in/marianellatorressi"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://twitter.com/Mar_Torressi"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter />
        </a>
        <a href="https://github.com/marts95" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="mailto:martorressi95@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail />
        </a>
      </div>
    </div>
  );
};
