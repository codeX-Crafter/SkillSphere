import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import aimlimg from "../../assets/images/domainHeroSecImages/aimlimg.png";
import DomainNav from "../../components/DomainNav";

function AIML() {
  const navItems = [
    "Roadmaps",
    "Practice",
    "Youtube Channels",
    "Miscellaneous",
  ];

  return (
    <div>
      <DomainTop
        domain="Artificial Intelligence and Machine Learning"
        description="The field dedicated to building intelligent systems that can learn from data and make informed decisions, using algorithms, statistical models, and deep learning techniques."
        png={aimlimg}
      />
      <DomainNav navItems={navItems} />
      {/* Section Components */}
      <div className="m-auto flex items-center justify-center p-16">
        <h4 className="font-rubik">Coming Soon...</h4>
      </div>
    </div>
  );
}

export default AIML;
