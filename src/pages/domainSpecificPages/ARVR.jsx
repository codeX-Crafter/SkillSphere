import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import arvrimg from "../../assets/images/domainHeroSecImages/arvrimg.png";
import DomainNav from "../../components/DomainNav";

function ARVR() {
  const navItems = [
    "Roadmaps",
    "Practice",
    "Youtube Channels",
    "Miscellaneous",
  ];

  return (
    <div>
      <DomainTop
        domain="Augmented and Virtual Reality"
        description="Technologies that enhance or simulate immersive environments by integrating virtual elements with the physical world or creating fully digital experiences for interaction and engagement"
        png={arvrimg}
      />
      <DomainNav navItems={navItems} />
      {/* Section Components */}
    </div>
  );
}

export default ARVR;
