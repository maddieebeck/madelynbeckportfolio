import { useState } from "react";

import Image from "next/image";

import styles from "./BigImageScroll.module.scss";

const BigImageScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className={styles.bigImageScroll}>
      <ul
        className={styles.bigImageScroll__list}
        style={{
          transform: `translateX(-${activeIndex * 400}px)`,
          width: "200vw",
        }}
      >
        <li className={styles.bigImageScroll__list__item}>
          <Image
            src="/imageScroll/image1.jpg"
            alt="Maddie in New York City"
            width={300}
            height={200}
            className={styles.bigImageScroll__image}
          />
        </li>
        <li className={styles.bigImageScroll__list__item}>
          <Image
            src="/imageScroll/image2.jpg"
            alt="Maddie and her friend Grace taking a walk through the forest"
            width={300}
            height={200}
            className={styles.bigImageScroll__image}
          />
        </li>
        <li className={styles.bigImageScroll__list__item}>
          <Image
            src="/imageScroll/image3.jpg"
            alt="Maddie performing in her acappella groups invitational"
            width={300}
            height={200}
            className={styles.bigImageScroll__image}
          />
        </li>
        <li className={styles.bigImageScroll__list__item}>
          <Image
            src="/imageScroll/image4.jpg"
            alt="placeholder"
            width={300}
            height={200}
            className={styles.bigImageScroll__image}
          />
        </li>
        <li className={styles.bigImageScroll__list__item}>
          <Image
            src="/imageScroll/image5.jpg"
            alt="placeholder"
            width={300}
            height={200}
            className={styles.bigImageScroll__image}
          />
        </li>
        <li className={styles.bigImageScroll__list__item}>
          <Image
            src="/imageScroll/image6.jpg"
            alt="placeholder"
            width={300}
            height={200}
            className={styles.bigImageScroll__image}
          />
        </li>
        <li className={styles.bigImageScroll__list__item}>
          <Image
            src="/imageScroll/image7.jpg"
            alt="placeholder"
            width={300}
            height={200}
            className={styles.bigImageScroll__image}
          />
        </li>
        <li className={styles.bigImageScroll__list__item}>
          <Image
            src="/imageScroll/image8.jpg"
            alt="placeholder"
            width={300}
            height={200}
            className={styles.bigImageScroll__image}
          />
        </li>
        <li className={styles.bigImageScroll__list__item}>
          <Image
            src="/imageScroll/image9.jpg"
            alt="placeholder"
            width={300}
            height={200}
            className={styles.bigImageScroll__image}
          />
        </li>
      </ul>
    </section>
  );
};
export default BigImageScroll;
