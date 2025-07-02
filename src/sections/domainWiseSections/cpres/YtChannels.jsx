import React from "react";
import ResourcesSection from "../ResourcesSection";

function YtChannels() {
  const youtubeResources = [
    {
      title: "Take U Forward (Striver)",
      desc: "Beginner-friendly A2Z DSA playlist, system design, and interview prep.",
      link: "https://www.youtube.com/c/takeUforward",
      tags: ["A2Z DSA", "Placement Focused"],
    },
    {
      title: "Aditya Verma",
      desc: "Highly intuitive explanations for DP, Recursion, and Sliding Window.",
      link: "https://www.youtube.com/@TheAdityaVerma",
      tags: ["DP Mastery", "Recursion", "Concept First"],
    },
    {
      title: "TLE Eliminators",
      desc: "Structured tutorials and contest solutions.",
      link: "https://www.youtube.com/@abdul_bari",
      tags: ["Theory Heavy", "Concepts", "Visual Learning"],
    },
  ];

  return (
    <ResourcesSection id="youtube-channels" resources={youtubeResources} />
  );
}

export default YtChannels;
