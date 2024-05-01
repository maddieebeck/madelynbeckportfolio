import { useState } from "react";

import styles from "./Accordion.module.scss";

const experience = [
  {
    title: "Guest Services Lead",
    date: "Oct. 2022-Present",
    location: "Barnes Center at the Arch; Syracuse, NY",
    description:
      "Provide prompt customer support with a professional, friendly, and patient attitude. Maintain a high level of knowledge of the services offered to answer any questions patrons may have. Attend and lead weekly staff meetings, and serving as a point of contact between general attendants and supervisors ",
  },
  {
    title: "Graphic Designer",
    date: "Spring 2022",
    location: "Zipped Magazine; Syracuse, NY",
    description:
      "Create designs for print a print publication. Collaborate with an editorial team to complete the magazine. Drafte a vision board with inspiration ideas.",
  },
  {
    title: "Digital Writer",
    date: "Fall 2023",
    location: "Jerk Magazine; Syracuse, NY",
    description:
      "Pitch weekly story ideas, and collaborate with superiors to consolidate ideas. maintain the proper voice and overall theme of the magazine.",
  },
  {
    title: "Musical Theatre Instructor",
    date: "Sep. 2016-Aug. 2022",
    location: "Academy of Theatre Arts; Buffalo, NY",
    description:
      "Plan and execute targeted lesson plans to instruct on dance technique, musical theater history, and performance etiquette. Mentor struggling students with individualized approaches to enhance learning. choreographed multiple dance numbers in various styles for performances throughout the year.",
  },
];

const ExperienceAccordion = () => {
  const [experienceSelected, setExperienceSelected] = useState(null);

  const toggle = (index) => {
    setExperienceSelected(experienceSelected === index ? null : index);
  };

  return (
    <div>
      <div className={styles.accordion}>
        {experience.map((experience, index) => (
          <div key={index} className={styles.accordion_item}>
            <div
              className={`title ${experienceSelected === index ? "up" : ""}`}
              onClick={() => toggle(index)}
            >
              <h2>{experience.title}</h2>
            </div>
            {experienceSelected === index && (
              <div className={styles.accordion_description}>
                <em>{experience.date}</em>
                <br />
                <b>{experience.location}</b>
                <br />
                {experience.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExperienceAccordion;
