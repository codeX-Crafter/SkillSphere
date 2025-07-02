import React from "react";
import ResourcesSection from "../ResourcesSection";

export default function Miscellaneous() {
  const miscResources = [
    {
      title: "Competitive progammer's handbook",
      desc: "A comprehensive guide to competitive programming covering algorithms, data structures, and problem-solving techniques.",
      link: "https://cses.fi/book/book.pdf",
      tags: ["Handbook", "Algorithms"],
    },
  ];

  return <ResourcesSection id="miscellaneous" resources={miscResources} />;
}
