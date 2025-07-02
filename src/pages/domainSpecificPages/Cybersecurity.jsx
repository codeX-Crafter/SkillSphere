import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import cyberimg from "../../assets/images/domainHeroSecImages/cyberimg.png";
import DomainNav from "../../components/DomainNav";

function Cybersecurity() {
  const navItems = [
    { name: "Roadmaps", id: "roadmaps" },
    { name: "Practice", id: "practice" },
    { name: "YouTube Channels", id: "youtube-channels" },
    { name: "Miscellaneous", id: "miscellaneous" },
  ];

  return (
    <div>
      <DomainTop
        domain="Cybersecurity"
        description="The practice of protecting systems, networks, and data from digital threats through risk assessment, encryption, ethical hacking, and security protocols to ensure confidentiality, integrity, and availability."
        png={cyberimg}
      />
      <DomainNav navItems={navItems} />
      {/* Section Components */}
      <div className="m-auto flex items-center justify-center p-16">
        <h4 className="font-rubik">Coming Soon...</h4>
      </div>
    </div>
  );
}

export default Cybersecurity;
