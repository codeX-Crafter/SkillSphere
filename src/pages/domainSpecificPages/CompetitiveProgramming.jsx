import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import cpimg from "../../assets/images/domainHeroSecImages/cpimg.png";
import DomainNav from "../../components/DomainNav";

function CompetitiveProgramming() {
  const navItems = [
    "Roadmaps",
    "Practice",
    "Youtube Channels",
    "Miscellaneous",
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
    </div>
  );
}

export default CompetitiveProgramming;
