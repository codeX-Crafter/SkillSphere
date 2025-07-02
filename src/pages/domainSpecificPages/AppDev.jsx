import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import appdevimg from "../../assets/images/domainHeroSecImages/appdevimg.png";
import DomainNav from "../../components/DomainNav";

function AppDev() {
  const navItems = [
    "Roadmaps",
    "Practice",
    "Youtube Channels",
    "Miscellaneous",
  ];

  return (
    <div>
      <DomainTop
        domain="App Development"
        description="The creation of software applications for mobile and desktop platforms, involving design, coding, testing, and deployment using technologies like Swift, Kotlin, Java, or cross-platform frameworks."
        png={appdevimg}
      />
      <DomainNav navItems={navItems} />
      {/* Section Components */}
    </div>
  );
}

export default AppDev;
