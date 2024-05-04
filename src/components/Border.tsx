import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Border.module.css";

export type BorderType = {
  sveIcon10png?: string;
  heading3SocietyEducation?: string;
  strengtheningConnectionsB?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propGap?: CSSProperties["gap"];
  propWidth1?: CSSProperties["width"];
};

const Border: FunctionComponent<BorderType> = ({
  sveIcon10png,
  heading3SocietyEducation,
  strengtheningConnectionsB,
  propWidth,
  propMinWidth,
  propGap,
  propWidth1,
}) => {
  const borderStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.border} style={borderStyle}>
      <img
        className={styles.sveIcon10png}
        loading="lazy"
        alt=""
        src={sveIcon10png}
      />
      <div
        className={styles.heading3SocietyEducationParent}
        style={frameDivStyle}
      >
        <h3 className={styles.heading3}>{heading3SocietyEducation}</h3>
        <div className={styles.strengtheningConnectionsBetw}>
          {strengtheningConnectionsB}
        </div>
      </div>
      <div className={styles.borderInner} style={frameDiv1Style}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.readMore}>Read More</div>
        </button>
      </div>
    </div>
  );
};

export default Border;
