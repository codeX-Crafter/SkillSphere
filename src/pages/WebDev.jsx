import React from "react";
import DomainTop from "../sections/DomainTop";
import webdevimg from "../assets/images/webdevimg.png"; // use a separate image for Web Dev
import DomainNav from "../components/DomainNav";
import WebDevRoadmaps from "../sections/webres/WebDevRoadmaps";

function WebDev() {
  const navItems = [
    "Roadmaps",
    "Youtube Channels",
    "Developer Tools",
    "Miscellaneous",
  ];

  return (
    <div>
      <DomainTop
        domain="Web Development"
        description="Web development is the process of designing, building, and maintaining websites and web applications using technologies such as HTML, CSS, JavaScript, and modern frameworks."
        png={webdevimg}
      />
      <DomainNav navItems={navItems} />
      <WebDevRoadmaps />
    </div>
  );
}

export default WebDev;
