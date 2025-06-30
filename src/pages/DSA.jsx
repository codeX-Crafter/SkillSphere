import React from "react";
import DomainTop from "../sections/DomainTop";
import dsaimg from "../assets/images/dsaimg.png";
import DomainNav from "../components/DomainNav";
import RoadmapsXsheets from "../sections/DsaRes/RoadmapsXsheets";
import PracticePlatforms from "../sections/DsaRes/PracticePlatforms";
import YoutubeChannels from "../sections/DsaRes/YoutubeChannels";
import MiscellaneousDSA from "../sections/DsaRes/MiscellaneousDSA";

function DSA() {
  const navItems = [
    "Roadmaps",
    "Practice",
    "Youtube Channels",
    "Miscellaneous",
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
