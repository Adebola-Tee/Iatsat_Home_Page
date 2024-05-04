import { FunctionComponent } from "react";
import styles from "./Background.module.css";

const Background: FunctionComponent = () => {
  return (
    <div className={styles.background}>
      <img
        className={styles.linkPlayButtonpng}
        loading="lazy"
        alt=""
        src="/link--playbuttonpng@2x.png"
      />
    </div>
  );
};

export default Background;
