import { FunctionComponent } from "react";
import styles from "./SliderBgpng.module.css";

const SliderBgpng: FunctionComponent = () => {
  return (
    <section className={styles.sliderBgpng}>
      <div className={styles.letssJoinHeading}>
        <div className={styles.letssJoinHeadingChild} />
        <div className={styles.heading2} />
        <div className={styles.bridgeTheGapHeading}>
          <b className={styles.letsJoinHands}>
            LET’S JOIN HANDS TOGETHER TO BRING THE REVOLUTION
          </b>
          <div className={styles.readMoreButton}>
            <h1 className={styles.letsBridgeThe}>Let’s Bridge the gap !</h1>
          </div>
        </div>
        <div className={styles.backgroundSlider}>
          <div className={styles.iatsatTitle}>
            <button className={styles.button}>
              <div className={styles.readMore}>Read More</div>
            </button>
            <div className={styles.societyEducationTitle}>
              <img
                className={styles.phoneCall01pngIcon}
                loading="lazy"
                alt=""
                src="/phonecall01png@2x.png"
              />
              <div className={styles.needHelp91123456789Wrapper}>
                <div className={styles.needHelpContainer}>
                  <span>
                    <p className={styles.needHelp}>Need help ?</p>
                    <p className={styles.p}>(+91 123 456 789)</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderBgpng;
