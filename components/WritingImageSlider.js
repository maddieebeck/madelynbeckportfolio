import { useState, Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./ImageSlider.module.scss";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Fragment>
      <button
        onClick={() => {
          setActiveIndex(activeIndex <= 0 ? 0 : activeIndex - 1);
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        onClick={() => {
          setActiveIndex(activeIndex >= 2 ? 2 : activeIndex + 1);
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <div className={styles.imageSlider}>
        <ul
          className={styles.imageSlider__list}
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          <li className={styles.item}>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQtnvqsLA9m1I1RrXkpuM5MpyYlZRlb9eIqMAheZc91FflKqP4cpJApLSqa4Vukww/pub?embedded=true"></iframe>
          </li>
          <li className={styles.item}>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTmflYXxDF982F4zlL8N2gmnEq53om-MNaBc0fXAz_xKKIvVDqvCRPLUTAQEwAoiw/pub?embedded=true"></iframe>
          </li>
          <li className={styles.item}>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vRfDncpnU833-I8NMmOLyLnBJFwxj5Y8_8Wn383I4aYHegbGO3TRsye2-LSK_gUbKSTxl6pKShVDShT/pub?embedded=true"></iframe>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default ImageSlider;
