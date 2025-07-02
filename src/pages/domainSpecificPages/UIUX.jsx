import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import uiuximg from "../../assets/images/domainHeroSecImages/uiuximg.png";
import DomainNav from "../../components/DomainNav";
import Roadmaps from "../../sections/domainWiseSections/uiuxres/Roadmaps";
import Ytchannels from "../../sections/domainWiseSections/uiuxres/YoutubeChannels";
// import Miscellaneous from "../../sections/domainWiseSections/uiuxres/Miscellaneous";
import DesignTools from "../../sections/domainWiseSections/uiuxres/DesignTools";
import MiscellaneousUX from "../../sections/domainWiseSections/uiuxres/MiscellaneousUX";
function UIUX() {
  const navItems = [
    { name: "Roadmaps", id: "roadmaps" },
    { name: "YouTube Channels", id: "youtube-channels" },
    { name: "Miscellaneous", id: "miscellaneous" },
    { name: "Design Tools", id: "design-tools" },
  ];

  return (
    <div>
      <DomainTop
        domain="User Interface and User Experience"
        description="The discipline of crafting intuitive user interfaces and meaningful user experiences through research, wireframing, prototyping, and visual design, focusing on usability and aesthetics."
        png={uiuximg}
      />
      <DomainNav navItems={navItems} />
      {/* Section Components */}
      <Roadmaps />
      <Ytchannels />
      <MiscellaneousUX />
      <DesignTools />
    </div>
  );
}

export default UIUX;
