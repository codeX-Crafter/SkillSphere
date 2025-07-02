import React from "react";
import ResourcesSection from "../ResourcesSection";

function WebDevRoadmaps() {
  const roadmapResources = [
    {
      title: "Frontend Developer Roadmap - roadmap.sh",
      desc: "A detailed visual guide to frontend development tools, topics, and progression.",
      link: "https://roadmap.sh/frontend",
      tags: ["Beginner Friendly", "Visual Guide", "Interactive"],
    },
    {
      title: "Backend Developer Roadmap - roadmap.sh",
      desc: "All backend essentials: APIs, databases, architecture, deployment, and more.",
      link: "https://roadmap.sh/backend",
      tags: ["Node.js", "Backend", "Databases"],
    },
    {
      title: "Full Stack Developer Roadmap",
      desc: "Comprehensive roadmap combining frontend and backend skills.",
      link: "https://roadmap.sh/full-stack",
      tags: ["Full Stack", "Advanced", "Roadmap"],
    },
    {
      title: "CodeWithHarry Sigma Web Development ",
      desc: "Concise, Hindi notes for full web dev journey (HTML to React).",
      link: "https://www.codewithharry.com/notes/web-dev/",
      tags: ["Notes", "Beginner"],
    },
  ];

  return (
    <section id="web-dev-roadmaps">
      <ResourcesSection resources={roadmapResources} />
    </section>
  );
}

export default WebDevRoadmaps;
