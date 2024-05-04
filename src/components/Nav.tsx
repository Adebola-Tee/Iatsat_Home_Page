import { FunctionComponent } from "react";
import styles from "./Nav.module.css";

const Nav: FunctionComponent = () => {
  return (
    <header className={styles.nav}>
      <img
        className={styles.linkLogo2b5e2162ff5158112f}
        loading="lazy"
        alt=""
        src="/link--logo2b5e2162ff5158112f6dpng@2x.png"
      />
      <nav className={styles.aboutLink}>
        <nav className={styles.initiativesLink}>
          <div className={styles.contactLink}>
            <div className={styles.itemLink}>Home</div>
          </div>
          <div className={styles.contactLink1}>
            <div className={styles.itemLink1}>About</div>
          </div>
          <div className={styles.contactLink2}>
            <div className={styles.itemLink2}>Services</div>
          </div>
          <div className={styles.itemLink3}>Initiatives</div>
          <div className={styles.itemLink4}>Contact</div>
          <div className={styles.itemLink5}>Exams</div>
        </nav>
      </nav>
    </header>
  );
};

export default Nav;
