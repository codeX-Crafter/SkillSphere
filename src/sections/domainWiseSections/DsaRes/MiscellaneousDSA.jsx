import React from "react";
import ResourcesSection from "../ResourcesSection";

function MiscellaneousDSA() {
  const miscResources = [
    {
      title: "Best LeetCode Resources (GitHub)",
      desc: "A curated collection of the best LeetCode tutorials, patterns, problems, and playlists from around the web.",
      link: "https://github.com/armankhondker/best-leetcode-resources",
      tags: ["LeetCode", "GitHub", "Curated List"],
    },
  ];

  return <ResourcesSection id="miscellaneous" resources={miscResources} />;
}

export default MiscellaneousDSA;
