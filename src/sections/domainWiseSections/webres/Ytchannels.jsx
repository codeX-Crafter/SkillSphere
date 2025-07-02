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
  ];

  return (
    <section id="web-dev-ytchannels">
      <ResourcesSection resources={ytResources} />
    </section>
  );
}

export default Ytchannels;
