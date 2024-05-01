"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSpotify,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { motion, AnimatePresence } from "framer-motion";

import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Homepage from "../components/Homepage";

const accounts = [
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/maddieebeck",
  },
  {
    name: "Facebook",
    icon: faFacebook,
    url: "https://www.facebook.com/maddie.beck.9275",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/madelyn-beck",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/maddieebeck",
  },
  {
    name: "Spotify",
    icon: faSpotify,
    url: "https://open.spotify.com/user/maddieebeck",
  },
];

const pages = [
  {
    title: "Home",
    component: <Homepage />,
    //backgroundColor: "red",
  },
  {
    title: "Resume",
    component: <Resume />,
    //backgroundColor: "green",
  },
  {
    title: "Portfolio",
    component: <Portfolio />,
    //backgroundColor: "lightblue",
  },
];

const Mainpage = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  return (
    <div>
      <nav>
        <div>
          <img src="mblogo.svg" alt="logo" width="175" />
        </div>
        <div>
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setActivePageIndex(index);
                }}
              >
                {page.title}
              </button>
            );
          })}
        </div>
      </nav>
      <main>
        <AnimatePresence>
          <motion.div
            key={activePageIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1 } }}
            exit={{ x: -300, opacity: 0 }}
            style={{ backgroundColor: pages[activePageIndex].backgroundColor }}
          >
            {pages[activePageIndex].component}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer>
        <div class="contactbar">
          <p>Madelyn Beck</p>
          <p>mgbeck@syr.edu</p>
          <p>(716)536-9502</p>
          <p>Syracuse, NY 13210</p>
        </div>
        <div class="icons">
          {accounts.map((account, index) => {
            return (
              <a href={account.url} target="_blank">
                <FontAwesomeIcon icon={account.icon} />
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
};
export default Mainpage;
