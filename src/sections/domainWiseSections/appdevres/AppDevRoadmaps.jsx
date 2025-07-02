import React from "react";
import ResourcesSection from "../ResourcesSection";

function AppDevRoadmaps() {
  const roadmapResources = [
    {
      title: "Android Developer Roadmap - roadmap.sh",
      desc: "A comprehensive roadmap for app development, covering essential tools and technologies.",
      link: "https://roadmap.sh/android",
      tags: ["Android", "Mobile Development"],
    },
    {
      title: "iOS Developer Roadmap - roadmap.sh",
      desc: "A complete guide for iOS app development, from Swift to deployment.",
      link: "https://roadmap.sh/ios",
      tags: ["iOS", "Mobile Development"],
    },
  ];

  return (
    <ResourcesSection id="app-dev-roadmaps" resources={roadmapResources} />
  );
}

export default AppDevRoadmaps;
