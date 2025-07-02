import React from "react";
import ResourcesSection from "../ResourcesSection";

function Roadmaps() {
  const roadmapResources = [
    {
      title: "CP31 sheet by TLE Eliminators",
      desc: "A comprehensive roadmap for cp, covering all essential topics and resources, rating wise.",
      link: "https://www.tle-eliminators.com/cp-sheet",
      tags: ["Structured", "Popular"],
    },
    {
      title: "CSES Problem Set",
      desc: "A collection of competitive programming problems with varying difficulty levels, ideal for practice and skill development.",
      link: "https://cses.fi/problemset/",
      tags: ["Practice", "Problem Set", "Beginner"],
    },
    {
      title: "Striver’s CP sheet ",
      desc: "A well-structured roadmap for competitive programming, covering all essential topics and resources.",
      link: "https://takeuforward.org/competitive-programming/strivers-cp-sheet/",
      tags: ["Structured", "Popular"],
    },
  ];

  return <ResourcesSection id="roadmaps" resources={roadmapResources} />;
}

export default Roadmaps;
