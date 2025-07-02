import React from "react";
import ResourcesSection from "../ResourcesSection";

function DeveloperTools() {
  const developertools = [
    {
      title: "Visual Studio Code",
      desc: "Interactive development environment with extensions for web development.",
      link: "https://code.visualstudio.com/download",
      tags: ["IDE", "code editor"],
    },
    {
      title: "GitHub",
      desc: "Version control and collaboration platform for code repositories.",
      link: "https://github.com/",
      tags: ["version control", "collaboration"],
    },
    {
      title: "Figma",
      desc: "Design tool for creating UI/UX designs and prototypes.",
      link: "https://www.figma.com/",
      tags: ["design", "layout"],
    },
  ];

  return (
    <ResourcesSection id="web-dev-developer-tools" resources={developertools} />
  );
}

export default DeveloperTools;
