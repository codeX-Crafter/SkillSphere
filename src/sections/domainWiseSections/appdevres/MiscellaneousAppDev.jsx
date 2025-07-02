import React from "react";
import ResourcesSection from "../ResourcesSection";

export default function MiscellaneousAppDev() {
  const miscellaneousweb = [
    {
      title: "Awesome Android",
      desc: "A curated list of awesome Android libraries and resources, including UI, networking, architecture, etc.",
      link: "https://github.com/JStumpp/awesome-android",
      tags: ["Android", "Libraries", "Open Source"],
    },
  ];

  return (
    <ResourcesSection id="app-dev-miscellaneous" resources={miscellaneousweb} />
  );
}
