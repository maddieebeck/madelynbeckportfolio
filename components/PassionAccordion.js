import { useState } from "react";

import styles from "./Accordion.module.scss";

const passion = [
  {
    title: "Music",
    content: (
      <ul>
        <li>
          <img src="pink+white.png" alt="pink+white arrangment" width="100%" />
        </li>
        <li>
          <img
            src="lockedoutofheaven.png"
            alt="locked out of heaven arrangment"
            width="100%"
          />
        </li>
      </ul>
    ),
  },
  {
    title: "Ceramics",
    content: (
      <ul>
        <li>
          <img src="boygenius.jpg" width="100%" />
        </li>
        <li>
          <img src="teapot.jpg" width="100%" />
        </li>
        <li>
          <img src="teapot2.jpg" width="100%" />
        </li>
        <li>
          <img src="plate.jpg" width="100%" />
        </li>
        <li>
          <img src="vase.jpg" width="100%" />
        </li>
      </ul>
    ),
  },
];

const PassionAccordion = () => {
  const [passionSelected, setPassionSelected] = useState(null);

  const toggle = (index) => {
    setPassionSelected(passionSelected === index ? null : index);
  };

  return (
    <div className={styles.passion}>
      <div className={styles.accordion}>
        {passion.map((passion, index) => (
          <div key={index} className={styles.accordion_item}>
            <div
              className={`title ${passionSelected === index ? "up" : ""}`}
              onClick={() => toggle(index)}
            >
              <h2>{passion.title}</h2>
            </div>
            {passionSelected === index && (
              <div className={styles.accordion_content}>{passion.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PassionAccordion;
