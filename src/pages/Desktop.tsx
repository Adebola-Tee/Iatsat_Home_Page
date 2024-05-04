import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import SliderBgpng from "../components/SliderBgpng";
import SocietyForFutureLink from "../components/SocietyForFutureLink";
import Background from "../components/Background";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <Nav />
      <SliderBgpng />
      <div className={styles.img} />
      <div className={styles.img1} />
      <div className={styles.img2} />
      <section className={styles.societyForFutureLinkParent}>
        <SocietyForFutureLink />
        <Background />
        <div className={styles.frameWrapper}>
          <div className={styles.qucikImgpngParent}>
            <img
              className={styles.qucikImgpngIcon}
              loading="lazy"
              alt=""
              src="/qucikimgpng@2x.png"
            />
            <div className={styles.background}>
              <h1 className={styles.heading2}>Our Initiatives</h1>
              <div className={styles.list}>
                <div className={styles.itemLink}>
                  <div
                    className={styles.societyForFuture}
                  >{`Society for Future counselors & Subject matter Experts (A Social initiative for Upskilling the Counselors across the Globe by Experts)`}</div>
                  <div className={styles.svgWrapper}>
                    <img className={styles.svgIcon} alt="" src="/svg.svg" />
                  </div>
                </div>
                <div className={styles.itemLink1}>
                  <input
                    className={styles.societyForPromotion}
                    placeholder={`Society for Promotion of Science, Technology & Sustainability`}
                    type="text"
                  />
                  <div className={styles.svgContainer}>
                    <img className={styles.svgIcon1} alt="" src="/svg.svg" />
                  </div>
                </div>
                <div className={styles.itemLink2}>
                  <div
                    className={styles.societyOfDrama}
                  >{`Society of Drama, Arts & Culture`}</div>
                  <div className={styles.svgFrame}>
                    <img className={styles.svgIcon2} alt="" src="/svg.svg" />
                  </div>
                </div>
                <div className={styles.itemLink3}>
                  <div
                    className={styles.globalSocietyFor}
                  >{`Global Society for Vedas & Spiritual study`}</div>
                  <div className={styles.frameDiv}>
                    <img className={styles.svgIcon3} alt="" src="/svg.svg" />
                  </div>
                </div>
                <div className={styles.itemLink4}>
                  <div className={styles.societyForReskilling}>
                    Society for Reskilling and Upskilling
                  </div>
                  <div className={styles.svgWrapper1}>
                    <img className={styles.svgIcon4} alt="" src="/svg.svg" />
                  </div>
                </div>
                <div className={styles.itemLink5}>
                  <input
                    className={styles.societyForGirls}
                    placeholder="Society for Girls Digital empowerment"
                    type="text"
                  />
                  <div className={styles.svgWrapper2}>
                    <img className={styles.svgIcon5} alt="" src="/svg.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
