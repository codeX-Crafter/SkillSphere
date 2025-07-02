import React from "react";
import ResourcesSection from "../ResourcesSection";

function PracticePlatforms() {
  const practiceResources = [
    {
      title: "LeetCode",
      desc: "Top interview and topic-wise practice platform. Great for daily challenges and contests.",
      link: "https://leetcode.com/",
      tags: ["Interview", "Daily", "Topic-wise", "Beginner"],
    },
    {
      title: "Coding Ninjas Studio",
      desc: "Well-structured guided paths and company-wise questions.",
      link: "https://www.codingninjas.com/studio",
      tags: ["Company-wise", "Topic-wise", "Indian"],
    },
    {
      title: "GeeksforGeeks Practice",
      desc: "Huge question bank with levels, tags, and company-specific sets.",
      link: "https://practice.geeksforgeeks.org/",
      tags: ["Beginner", "Company-wise", "Indian"],
    },
    {
      title: "Codeforces",
      desc: "Best platform for competitive programming with regular rated contests.",
      link: "https://codeforces.com/",
      tags: ["CP", "Contests", "Advanced"],
    },
    {
      title: "AtCoder",
      desc: "Great for beginners in CP with ABC beginner contests.",
      link: "https://atcoder.jp/",
      tags: ["CP", "Beginner", "Contests"],
    },
    {
      title: "HackerRank",
      desc: "Popular among beginners for structured learning and resume profile.",
      link: "https://www.hackerrank.com/",
      tags: ["Beginner", "Structured", "Resume"],
    },
    {
      title: "HackerEarth",
      desc: "Practice DSA and participate in hiring or regular contests.",
      link: "https://www.hackerearth.com/",
      tags: ["Contests", "Hiring"],
    },
    {
      title: "CodeChef",
      desc: "Competitive programming platform with regular contests and DSA learning tracks.",
      link: "https://www.codechef.com/",
      tags: ["CP", "Contests"],
    },
  ];

  return <ResourcesSection id="practice" resources={practiceResources} />;
}

export default PracticePlatforms;
