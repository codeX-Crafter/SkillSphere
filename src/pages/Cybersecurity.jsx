import React from "react";
import DomainTop from "../sections/DomainTop";
import cyberimg from "../assets/images/cyberimg.png";
import DomainNav from "../components/DomainNav";

function Cybersecurity() {
  const navItems = [
    "Roadmaps",
    "Practice",
    "Youtube Channels",
    "Miscellaneous",
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
    </div>
  );
}

export default Cybersecurity;
