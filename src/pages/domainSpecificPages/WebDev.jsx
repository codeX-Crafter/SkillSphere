import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import webdevimg from "../../assets/images/domainHeroSecImages/webdevimg.png";
import DomainNav from "../../components/DomainNav";

import WebDevRoadmaps from "../../sections/domainWiseSections/webres/WebDevRoadmaps";
// import DeveloperTools from "../../sections/domainWiseSections/webres/DeveloperTools";
// import MiscellaneousWeb from "../../sections/domainWiseSections/webres/MiscellaneousWeb";
import Ytchannels from "../../sections/domainWiseSections/webres/Ytchannels";

function WebDev() {
  const navItemss = [
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
      <DomainNav navItems={navItemss} />
      <WebDevRoadmaps />
      <Ytchannels />
    </div>
  );
}

export default WebDev;
