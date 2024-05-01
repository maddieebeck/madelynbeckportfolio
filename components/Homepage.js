import ImageSlider from "./WritingImageSlider";
import BigImageScroll from "./BigImageScroll";

import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.home}>
      <row className={styles.home.content}>
        <h1>Hi, I'm Maddie!</h1>
        <h2>Digital Journalism Student | Syracuse University</h2>
        <br />
        <p>
          Buffalo, NY born and raised, Madelyn graduated from Williamsville
          South High School in 2021 and moved to Syracuse, NY to study
          journalism at Syracuse University, with an intended graduating year of
          2025.
        </p>
        <br />
        <p>
          Aside from academics, Madelyn has a history of musical theater and
          performing, with a love of singing, dancing, crochet and guitar.
        </p>
      </row>
      <row className={styles.home.scroll}>
        <BigImageScroll />
      </row>
    </div>
  );
};
export default Homepage;
