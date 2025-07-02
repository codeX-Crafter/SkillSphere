import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import webdevimg from "../../assets/images/domainHeroSecImages/webdevimg.png";
import DomainNav from "../../components/DomainNav";

import WebDevRoadmaps from "../../sections/domainWiseSections/webres/WebDevRoadmaps";
import Ytchannels from "../../sections/domainWiseSections/webres/Ytchannels";
import DeveloperTools from "../../sections/domainWiseSections/webres/DeveloperTools";
import MiscellaneousWebDev from "../../sections/domainWiseSections/webres/MiscellaneousWebDev";

function WebDev() {
  const navItemss = [
    { name: "Roadmaps", id: "web-dev-roadmaps" },
    { name: "YouTube Channels", id: "web-dev-ytchannels" },
    { name: "Miscellaneous", id: "web-dev-miscellaneous" },
    { name: "Developer Tools", id: "web-dev-developer-tools" },
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
      <MiscellaneousWebDev />
      <DeveloperTools />
    </div>
  );
}

export default WebDev;
