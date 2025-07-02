import React from "react";
import ResourcesSection from "../ResourcesSection";

function YoutubeChannels() {
  const youtubeResources = [
    {
      title: "Take U Forward (Striver)",
      desc: "Beginner-friendly A2Z DSA playlist, system design, and interview prep.",
      link: "https://www.youtube.com/c/takeUforward",
      tags: ["A2Z DSA", "Placement Focused"],
    },
    {
      title: "CodeHelp (Love Babbar)",
      desc: "Structured DSA tutorials, company questions, and mock sessions.",
      link: "https://www.youtube.com/@CodeHelp",
      tags: ["Interview Prep", "C++", "Shortcut Tricks"],
    },
    {
      title: "Aditya Verma",
      desc: "Highly intuitive explanations for DP, Recursion, and Sliding Window.",
      link: "https://www.youtube.com/@TheAdityaVerma",
      tags: ["DP Mastery", "Recursion", "Concept First"],
    },
    {
      title: "Abdul Bari",
      desc: "Theoretical breakdown of data structures and algorithms with animations.",
      link: "https://www.youtube.com/@abdul_bari",
      tags: ["Theory Heavy", "Concepts", "Visual Learning"],
    },
    {
      title: "Apna College",
      desc: "Structured DSA tutorials, full courses, and guidance for students starting in tech.",
      link: "https://www.youtube.com/@ApnaCollegeOfficial",
      tags: ["Begginer Friendly"],
    },
  ];

  return (
    <ResourcesSection id="youtube-channels" resources={youtubeResources} />
  );
}

export default YoutubeChannels;
