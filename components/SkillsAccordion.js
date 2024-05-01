import { useState } from "react";

import styles from "./Accordion.module.scss";

const skills = [
  {
    title: "Digital",
    skills: (
      <ul>
        <li>Adobe Creative Suites</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Social",
    skills: (
      <ul>
        <li>Instagram</li>
        <li>TikTok</li>
        <li>Pinterest</li>
        <li>Facebook</li>
      </ul>
    ),
  },
  {
    title: "Writing",
    skills: (
      <ul>
        <li>Ap Style</li>
        <li>MLA</li>
        <li>APA</li>
      </ul>
    ),
  },
  {
    title: "Other",
    skills: (
      <ul>
        <li>Conversational French</li>
        <li>Point of Sale</li>
        <li>Customer Service</li>
        <li>Crochet</li>
        <li>Vocal Performance</li>
        <li>Music Arrangment</li>
        <li>Choreography</li>
      </ul>
    ),
  },
];

const SkillsAccordion = () => {
  const [skillsSelected, setSkillsSelected] = useState(null);

  const toggle = (index) => {
    setSkillsSelected(skillsSelected === index ? null : index);
  };

  return (
    <div>
      <div className={styles.accordion}>
        {skills.map((skills, index) => (
          <div key={index} className={styles.accordion_item}>
            <div
              className={`title ${skillsSelected === index ? "up" : ""}`}
              onClick={() => toggle(index)}
            >
              <h2>{skills.title}</h2>
            </div>
            {skillsSelected === index && (
              <div className={styles.accordion_description}>
                {skills.skills}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillsAccordion;
