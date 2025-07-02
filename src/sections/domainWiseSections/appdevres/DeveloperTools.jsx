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
      title: "Android Studio",
      desc: "Official IDE for Android development with powerful tools for building apps.",
      link: " https://developer.android.com/studio",
      tags: ["IDE", "code editor"],
    },
    {
      title: "XCode",
      desc: "Official IDE for iOS development with tools for building apps.",
      link: "  https://developer.apple.com/xcode/",
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
    <ResourcesSection id="app-dev-developer-tools" resources={developertools} />
  );
}

export default DeveloperTools;
