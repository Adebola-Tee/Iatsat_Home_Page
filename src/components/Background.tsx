import { FunctionComponent } from "react";
import Border from "./Border";
import styles from "./Background.module.css";

const Background: FunctionComponent = () => {
  return (
    <div className={styles.background}>
      <div className={styles.servicesImgpngParent}>
        <img
          className={styles.servicesImgpngIcon}
          loading="lazy"
          alt=""
          src="/servicesimgpng@2x.png"
        />
        <div className={styles.linkListItem}>
          <h1 className={styles.primaryMission}>Primary Mission</h1>
        </div>
      </div>
      <div className={styles.linkListItem1}>
        <Border
          sveIcon10png="/sveicon10png@2x.png"
          heading3SocietyEducation="Bridging Industry, Universities, and Schools"
          strengtheningConnectionsB="Strengthening connections between industry, universities, and schools to foster collaboration and knowledge exchange."
        />
        <Border
          sveIcon10png="/sveicon10png-1@2x.png"
          heading3SocietyEducation="Advanced Global Learning wth Cutting-edge Technology"
          strengtheningConnectionsB="Spearheading the development and implementation of state-of-the-art technology to enrich and expand global learning opportunities."
          propWidth="495px"
          propMinWidth="495px"
          propGap="52px"
          propWidth1="326px"
        />
        <div className={styles.border}>
          <img
            className={styles.sveIcon10png}
            alt=""
            src="/sveicon10png-2@2x.png"
          />
          <div className={styles.heading3SocietyEducationParent}>
            <h3 className={styles.heading3}>
              Empowering Global Societies through Innovative Solutions
            </h3>
            <div className={styles.drivingSocietalProgress}>
              Driving societal progress through the creation and adoption of
              innovative solutions that address diverse challenges and empower
              communities worldwide
            </div>
          </div>
          <div className={styles.borderInner}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.readMore}>Read More</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
