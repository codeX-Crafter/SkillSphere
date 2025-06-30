import React from "react";
import DomainTop from "../sections/DomainTop";
import aimlimg from "../assets/images/aimlimg.png";
import DomainNav from "../components/DomainNav";

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
    </div>
  );
}

export default AIML;
