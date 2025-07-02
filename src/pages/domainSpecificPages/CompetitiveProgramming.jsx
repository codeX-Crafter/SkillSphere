import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import cpimg from "../../assets/images/domainHeroSecImages/cpimg.png";
import DomainNav from "../../components/DomainNav";
import Roadmaps from "../../sections/domainWiseSections/cpres/Roadmaps";
import Practice from "../../sections/domainWiseSections/cpres/Practice";
import YtChannels from "../../sections/domainWiseSections/cpres/YtChannels";
import Miscellaneous from "../../sections/domainWiseSections/cpres/Miscellaneous";

function CompetitiveProgramming() {
  const navItems = [
    { name: "Roadmaps", id: "roadmaps" },
    { name: "Practice", id: "practice" },
    { name: "YouTube Channels", id: "youtube-channels" },
    { name: "Miscellaneous", id: "miscellaneous" },
  ];

  return (
    <div>
      <DomainTop
        domain="Competitive Programming"
        description="The sport of solving algorithmic problems under time constraints using data structures, logic, and optimization techniques, often practiced through contests and coding platforms"
        png={cpimg}
      />
      <DomainNav navItems={navItems} />
      {/* Section Components */}
      <Roadmaps />
      <Practice />
      <YtChannels />
      <Miscellaneous />
    </div>
  );
}

export default CompetitiveProgramming;
