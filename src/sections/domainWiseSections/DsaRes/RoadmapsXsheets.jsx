import React from "react";
import ResourcesSection from "../ResourcesSection";

function RoadmapsXsheets() {
  const roadmapResources = [
    {
      title: "Striver’s A2Z DSA Sheet",
      desc: "Structured progression from basics to advanced with video tutorials, ideal for interviews.",
      link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
      tags: ["Structured", "Most Popular"],
    },
    {
      title: "Love Babbar DSA playlist",
      desc: "Classic 450 problems covering all key DSA topics with company-wise relevance.",
      link: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
      tags: ["Standard", "Revision", "Company Focused"],
    },
    {
      title: "Neetcode.io",
      desc: "Interview prep focused DSA sheet with Leetcode problems. Includes 75, 150, and 300.",
      link: "https://neetcode.io/",
      tags: ["Interview Prep", "Leetcode Based"],
    },
    {
      title: "GFG SDE Sheet",
      desc: "Covers frequently asked SDE problems with direct links to solutions and theory.",
      link: "https://practice.geeksforgeeks.org/explore?page=1&sortBy=accuracy&category[]=SDE%20Sheet",
      tags: ["Concept + Practice", "Company Tags", "GFG"],
    },
    {
      title: "Fraz’s DSA Sheet ",
      desc: "Well-structured SDE sheet, includes tracking features.",
      link: "https://learnyard.com/practice/dsa",
      tags: ["Balanced", "FAANG", "Leetcode"],
    },

    {
      title: "roadmap.sh DSA Roadmap ",
      desc: "Interactive DSA learning roadmap from basics to advanced concepts.",
      link: "https://roadmap.sh/datastructures-and-algorithms",
      tags: ["Interactive", "Modern"],
    },
  ];

  return <ResourcesSection id="roadmaps" resources={roadmapResources} />;
}

export default RoadmapsXsheets;
