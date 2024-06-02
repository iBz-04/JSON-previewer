import React from "react";
import { GitPullRequest, TwitterLogo } from "phosphor-react";
import TwitterIcon from "../../assets/icons/icons8-twitter.svg";
import GithubIcon from "../../assets/icons/icons8-github.svg";
import LinkedinIcon from "../../assets/icons/icons8-linkedin-2.svg";
import StarIcon from "../../assets/icons/icons8-star-50.png";
import ClearIcon from "../../assets/icons/icons8-clear-64.png";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ setCode }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <div onClick={() => setCode(`{}`)}>
          <img src={ClearIcon} alt="clear icon" />
        </div>
      </div>
      <div className={styles.sidebar__bottom}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ibrahim-rayamah-8b068b229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        >
          <img src={LinkedinIcon} alt="linkedin icon" />
        </a>
        <a target="_blank" href="https://twitter.com/ibrahh__ib">
          <img src={TwitterIcon} alt="twitter icon" />
        </a>
        <a target="_blank" href="https://github.com/iBz-04/JSON-previewer">
          <img src={GithubIcon} alt="github icon" />
        </a>
        <a
          target="_blank"
          href="https://github.com/iBz-04/JSON-previewer/stargazers"
        >
          <img src={StarIcon} alt="star icon" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
