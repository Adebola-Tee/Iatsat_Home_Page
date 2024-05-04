import { FunctionComponent } from "react";
import styles from "./SocietyForFutureLink.module.css";

const SocietyForFutureLink: FunctionComponent = () => {
  return (
    <div className={styles.societyForFutureLink}>
      <div className={styles.subjectMatterExpLink}>
        <div className={styles.societyOfPromotionLink}>
          <div className={styles.backgroundshadow}>
            <div className={styles.globalSocietyVedasLink}>
              <img
                className={styles.sveIcon4png}
                loading="lazy"
                alt=""
                src="/sveicon4png@2x.png"
              />
              <div className={styles.societyForGirlsLink}>
                <h3 className={styles.heading5}>Our Mission</h3>
              </div>
            </div>
            <div className={styles.weAreCommittedContainer}>
              <span>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.blankLine2}>&nbsp;</p>
                <p className={styles.weAreCommitted}>
                  "We are committed to realizing our vision by facilitating
                  resource-based learning that drives exponential growth. Our
                  mission is to enable economic independence through education
                  within our community, ensuring that everyone has access to the
                  knowledge, resources, and opportunities needed to build a
                  brighter and more prosperous future."
                </p>
              </span>
            </div>
          </div>
          <div className={styles.backgroundshadow1}>
            <div className={styles.sveIcon4pngParent}>
              <img
                className={styles.sveIcon4png1}
                alt=""
                src="/sveicon4png-1@2x.png"
              />
              <div className={styles.heading5EduSmartWrapper}>
                <h3 className={styles.heading51}>Our Vision</h3>
              </div>
            </div>
            <div className={styles.atIatsatWe}>
              "At IATSAT, we aspire to influence global priorites for the future
              by embracing experiential learning as our core belief. Our vision
              is to create a world where knowledge is a catalyst for positive
              change, empowering individuals and communities alike."
            </div>
          </div>
          <div className={styles.backgroundshadow2}>
            <div className={styles.sveIcon4pngGroup}>
              <img
                className={styles.sveIcon4png2}
                alt=""
                src="/sveicon4png-2@2x.png"
              />
              <div className={styles.heading5EduSmartContainer}>
                <h3 className={styles.heading52}>Our Goal</h3>
              </div>
            </div>
            <div className={styles.iatsatIsPassionatelyContainer}>
              <p className={styles.blankLine3}>&nbsp;</p>
              <p className={styles.iatsatIsPassionately}>
                "IATSAT is passionately driven to revolutionize education,
                aiming for a profound influence on 21st-century learning. We
                empower every educational institution with the right set of
                toos. Our unwavering commitment is to cultivate equal
                opportunites, empowering every student to flourish and excel."
              </p>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.heading2AFewWordsAboutParent}>
            <h1 className={styles.heading2}>
              Bridging the Gap Between Industries, Universities, and Schools
            </h1>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.vectorIcon}
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                        <b className={styles.introductionToIatsat}>
                          Introduction to IATSAT
                        </b>
                      </div>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.frameParent2}>
                      <div
                        className={styles.iatsatInternationalAccreditWrapper}
                      >
                        <div className={styles.iatsatInternationalAccredit}>
                          IATSAT (International Accredited Talent Scholarship
                          Admission Test) is a pioneering initiative by One
                          Alphabet Educational Society.
                        </div>
                      </div>
                      <div className={styles.vectorGroup}>
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/vector.svg"
                        />
                        <b className={styles.socialImpactIn}>
                          Social Impact in EdTech
                        </b>
                      </div>
                    </div>
                    <div className={styles.iatsatStandsOutAsTheWorldWrapper}>
                      <div className={styles.iatsatStandsOut}>
                        IATSAT stands out as the world's first 100%
                        philanthropy-driven EdTech company, with operations
                        spanning India and Australia.
                      </div>
                    </div>
                  </div>
                  <div className={styles.empowermentButton}>
                    <div className={styles.universityInfoBox}>
                      <b className={styles.empoweringYouthFor}>
                        Empowering Youth for Success
                      </b>
                    </div>
                    <div className={styles.atIatsatWe1}>
                      At IATSAT, we are deeply invested in nurturing the
                      potential of young minds, guiding them towards success.
                    </div>
                  </div>
                </div>
                <div className={styles.readMoreButton}>
                  <button className={styles.button}>
                    <div className={styles.readMore}>Read More</div>
                  </button>
                  <div className={styles.border}>
                    <img
                      className={styles.awardBtnIconpng}
                      alt=""
                      src="/awardbtniconpng@2x.png"
                    />
                    <b className={styles.winningAward}>20+ Winning award</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subjectExpandIcon}>
            <div className={styles.societyEducationHeader}>
              <div className={styles.aboutImg02pngWrapper}>
                <img
                  className={styles.aboutImg02pngIcon}
                  loading="lazy"
                  alt=""
                  src="/about-img-02png@2x.png"
                />
              </div>
              <img
                className={styles.aboutImg02pngIcon1}
                alt=""
                src="/about-img-02png-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyForFutureLink;
