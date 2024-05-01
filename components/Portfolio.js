import styles from "./Portfolio.module.scss";

import WritingImageSlider from "./WritingImageSlider";
import PassionAccordion from "./PassionAccordion";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1>Portfolio</h1>
      <WritingImageSlider />

      <h1>Passion Projects</h1>
      <PassionAccordion />
    </div>
  );
};
export default Portfolio;
