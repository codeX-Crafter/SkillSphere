import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import dsaimg from "../../assets/images/domainHeroSecImages/dsaimg.png";
import DomainNav from "../../components/DomainNav";
import RoadmapsXsheets from "../../sections/domainWiseSections/DsaRes/RoadmapsXsheets";
import PracticePlatforms from "../../sections/domainWiseSections/DsaRes/PracticePlatforms";
import YoutubeChannels from "../../sections/domainWiseSections/DsaRes/YoutubeChannels";
import MiscellaneousDSA from "../../sections/domainWiseSections/DsaRes/MiscellaneousDSA";

function DSA() {
  const navItems = [
    { name: "Roadmaps", id: "roadmaps" },
    { name: "Practice", id: "practice" },
    { name: "YouTube Channels", id: "youtube-channels" },
    { name: "Miscellaneous", id: "miscellaneous" },
  ];

  return (
    <div>
      <DomainTop
        domain="Data Structures and Algorithms"
        description="Data structures are ways of organizing and storing data efficiently, while algorithms are step-by-step procedures for solving problems or performing computations using that data."
        png={dsaimg}
      />
      <DomainNav navItems={navItems} />
      {/* Section Components */}
      <RoadmapsXsheets />
      <PracticePlatforms />
      <YoutubeChannels />
      <MiscellaneousDSA />
    </div>
  );
}

export default DSA;
