import React from "react";
import ResourcesSection from "../ResourcesSection";

function Practice() {
  const practiceResources = [
    {
      title: "Codeforces",
      desc: "Frequent contests, vast problem archive, real-time ratings, strong community, editorial blogs",
      link: "https://codeforces.com/",
      tags: ["CP", "Contests", "Advanced"],
    },
    {
      title: "CodeChef",
      desc: "Monthly contests (Long, Cook-Off, Lunchtime), beginner-friendly, detailed editorials, IDE",
      link: "https://www.codechef.com/",
      tags: ["CP", "Contests"],
    },
    {
      title: "LeetCode",
      desc: "Weekly/biweekly contests, interview-style problems, global ranking",
      link: "https://leetcode.com/",
      tags: ["Interview", "Daily", "Topic-wise"],
    },
    {
      title: "AtCoder",
      desc: "	Clean interface, high-quality problems, regular contests (ABC, ARC, AGC)",
      link: "https://atcoder.jp/",
      tags: ["CP", "Beginner", "Contests"],
    },
    {
      title: "HackerRank",
      desc: "Wide variety (algorithms, AI, SQL), hiring challenges, practice & compete sections",
      link: "https://www.hackerrank.com/",
      tags: ["Beginners", "Structured"],
    },
  ];

  return <ResourcesSection id="practice" resources={practiceResources} />;
}

export default Practice;
