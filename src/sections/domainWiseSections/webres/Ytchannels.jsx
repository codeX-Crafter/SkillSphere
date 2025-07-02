import React from "react";
import ResourcesSection from "../ResourcesSection";

function Ytchannels() {
  const ytResources = [
    {
      title: "CodeWithHarry",
      desc: "Hindi-based beginner to advanced tutorials; Sigma Web Dev Course.",
      link: "https://www.youtube.com/@CodeWithHarry",
      tags: ["YouTube", "Hindi", "Full Stack"],
    },

    {
      title: "Akshay Saini (Namaste JavaScript)",
      desc: "JS deep dive series; covers closures, hoisting, event loop.",
      link: "https://www.youtube.com/@AkshaySaini",
      tags: ["JavaScript", "Concepts", "In-depth"],
    },
    {
      title: "freeCodeCamp.org",
      desc: "Full-length tutorials, HTML, CSS, JavaScript, React and more.",
      link: "https://www.youtube.com/c/Freecodecamp",
      tags: ["JavaScript", "Concepts", "In-depth"],
    },

    {
      title: "Chai Aur Code",
      desc: "	Frontend and backend development explained in Hindi",
      link: "https://www.youtube.com/@chaiaurcode",
      tags: ["JavaScript", "Concepts", "In-depth"],
    },
  ];

  return <ResourcesSection id="web-dev-ytchannels" resources={ytResources} />;
}

export default Ytchannels;
