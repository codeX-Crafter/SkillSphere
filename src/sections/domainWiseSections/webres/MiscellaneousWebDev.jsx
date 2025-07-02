import React from "react";
import ResourcesSection from "../ResourcesSection";

function MiscellaneousWebDev() {
  const miscellaneousweb = [
    {
      title: "MDN Docs",
      desc: "Comprehensive documentation for web technologies including HTML, CSS, and JavaScript.",
      link: "https://developer.mozilla.org/en-US/docs/Web",
      tags: ["documentation"],
    },
    {
      title: "GitHub",
      desc: "Code hosting, collaboration, open-source projects",
      link: "https://github.com/",
      tags: ["code", "open-source"],
    },
    {
      title: "W3Schools",
      desc: "Popular web development tutorials and references for HTML, CSS, JavaScript, and more.",
      link: "https://www.w3schools.com/",
      tags: ["begginers", "tutorials"],
    },
  ];

  return (
    <ResourcesSection id="web-dev-miscellaneous" resources={miscellaneousweb} />
  );
}

export default MiscellaneousWebDev;
