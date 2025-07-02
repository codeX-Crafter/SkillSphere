import React from "react";
import ResourcesSection from "../ResourcesSection";

export default function Roadmaps() {
  const roadmapResources = [
    {
      title: "UX Designer Roadmap- roadmap.sh",
      desc: "A comprehensive roadmap for UX design, covering essential tools and technologies.",
      link: "https://roadmap.sh/ux-design",
      tags: ["Roadmap", "Beginner to Pro"],
    },
  ];

  return <ResourcesSection id="roadmaps" resources={roadmapResources} />;
}
