import React from "react";
import DomainTop from "../../sections/domainWiseSections/DomainTop";
import appdevimg from "../../assets/images/domainHeroSecImages/appdevimg.png";
import DomainNav from "../../components/DomainNav";
import AppDevRoadmaps from "../../sections/domainWiseSections/appdevres/AppDevRoadmaps";
import Ytchannels from "../../sections/domainWiseSections/appdevres/Ytchannels";
import MiscellaneousAppDev from "../../sections/domainWiseSections/appdevres/MiscellaneousAppDev";
import DeveloperTools from "../../sections/domainWiseSections/appdevres/DeveloperTools";
function AppDev() {
  const navItems = [
    { name: "Roadmaps", id: "app-dev-roadmaps" },
    { name: "YouTube Channels", id: "app-dev-ytchannels" },
    { name: "Miscellaneous", id: "app-dev-miscellaneous" },
    { name: "Developer Tools", id: "app-dev-developer-tools" },
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
      <AppDevRoadmaps />
      <Ytchannels />
      <MiscellaneousAppDev />
      <DeveloperTools />
    </div>
  );
}

export default AppDev;
