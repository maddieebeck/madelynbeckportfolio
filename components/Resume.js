import styles from "./Resume.module.scss";

import ExperienceAccordion from "./ExperienceAccordion";
import SkillsAccordion from "./SkillsAccordion";

const Resume = () => {
  return (
    <div className={styles.resume}>
      <div>
        <h1>Education</h1>
        <h2>Syracuse University 2025</h2>

        <div className={styles.resume_education}>
          <div>
            <strong>S.I. Newhouse School of Public Communications</strong>
            <br />
            <em>Magazine, News and Digital Journalism BS</em>
          </div>

          <div>
            <strong>School of Information Studies</strong>
            <br />
            <em>Information Management and Technology minor</em>
          </div>

          <div>
            <strong>College of Arts and Sciences</strong>
            <br />
            <em>Psychology minor</em>
          </div>
        </div>
      </div>

      <div className={styles.resume_exsk}>
        <div>
          <h1>Experience</h1>
          <ExperienceAccordion />
        </div>

        <div>
          <h1>Skills</h1>
          <SkillsAccordion />
        </div>
      </div>
    </div>
  );
};
export default Resume;
