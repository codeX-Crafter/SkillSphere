import React from "react";
import ResourcesSection from "../ResourcesSection";

export default function YtChannels() {
  const youtubeResources = [
    {
      title: "DesignCourse",
      desc: "High-quality UI/UX and frontend design tutorials with real-world examples.",
      link: "https://www.youtube.com/@DesignCourse",
      tags: ["UI Design", "Frontend", "Pro Tips"],
    },
    {
      title: "The Cutting Edge School",
      desc: "In-depth tutorials on UI/UX design, Figma, and design systems by Ansh Mehra.",
      link: "https://www.youtube.com/@AJSmart",
      tags: ["UX", "Workshops", "Design Sprint"],
    },
    {
      title: "Flux Academy",
      desc: "Web & UI design tutorials, freelancing advice, and Figma practices.",
      link: "https://www.youtube.com/@FluxAcademy",
      tags: ["Web Design", "Figma"],
    },
  ];

  return (
    <ResourcesSection id="youtube-channels" resources={youtubeResources} />
  );
}
