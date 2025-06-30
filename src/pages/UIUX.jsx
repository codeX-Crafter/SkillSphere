import React from "react";
import DomainTop from "../sections/DomainTop";
import uiuximg from "../assets/images/uiuximg.png";
import DomainNav from "../components/DomainNav";

function UIUX() {
  const navItems = [
    "Roadmaps",
    "Practice",
    "Youtube Channels",
    "Miscellaneous",
  ];

  return (
    <div>
      <DomainTop
        domain="User Interface and User Experience"
        description="The discipline of crafting intuitive user interfaces and meaningful user experiences through research, wireframing, prototyping, and visual design, focusing on usability and aesthetics."
        png={uiuximg}
      />
      <DomainNav navItems={navItems} />
      {/* Section Components */}
    </div>
  );
}

export default UIUX;
