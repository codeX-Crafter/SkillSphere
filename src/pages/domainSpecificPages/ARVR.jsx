import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import arvrimg from "../../assets/images/domainHeroSecImages/arvrimg.png";
import DomainNav from "../../components/DomainNav";

function ARVR() {
  const navItems = [
    { name: "Roadmaps", id: "roadmaps" },
    { name: "Practice", id: "practice" },
    { name: "YouTube Channels", id: "youtube-channels" },
    { name: "Miscellaneous", id: "miscellaneous" },
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
      <div className="m-auto flex items-center justify-center p-16">
        <h4 className="font-rubik">Coming Soon...</h4>
      </div>
    </div>
  );
}

export default ARVR;
