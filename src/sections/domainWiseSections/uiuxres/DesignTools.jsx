import React from "react";
import ResourcesSection from "../ResourcesSection";

export default function DesignTools() {
  const toolsResources = [
    {
      title: "Figma",
      desc: "Collaborative interface design tool used for UI, prototyping, and design systems.",
      link: "https://www.figma.com/",
      tags: ["UI", "Prototyping", "Design System"],
    },
    {
      title: "Adobe XD",
      desc: "Vector-based UX design tool for wireframes, prototypes, and screen flows.",
      link: "https://adobexdplatform.com/",
      tags: ["UX", "Wireframes", "Adobe"],
    },
    {
      title: "Sketch",
      desc: "Popular macOS tool for UI design with strong plugin support.",
      link: "https://www.sketch.com/",
      tags: ["UI", "Plugins"],
    },
  ];

  return <ResourcesSection id="design-tools" resources={toolsResources} />;
}
