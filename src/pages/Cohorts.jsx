import React from "react";
import CohortsPgTop from "../sections/CohortsPgTop";
import SocietyCard from "../components/SocietyCard";
import leanin from "../assets/images/soc/leanin.jpg";
import gdg from "../assets/images/soc/gdg.jpg";
import msl from "../assets/images/soc/msl.jpg";
import techneeds from "../assets/images/soc/techneeds.jpg";
import codebenders from "../assets/images/soc/codebenders.jpg";
import protege from "../assets/images/soc/protege.jpg";

function Cohorts() {
  return (
    <div>
      <CohortsPgTop />
      <div className="w-full flex justify-center px-16 mt-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-8
 place-items-center max-w-6xl w-full"
        >
          <SocietyCard
            imageSrc={gdg}
            societyName="GOOGLE DEVELOPER GROUPS ON CAMPUS"
          />
          <SocietyCard imageSrc={msl} societyName="LEAN IN" />
          <SocietyCard imageSrc={techneeds} societyName="LEAN IN" />
          <SocietyCard imageSrc={codebenders} societyName="LEAN IN" />
          <SocietyCard imageSrc={leanin} societyName="LEAN IN" />
          <SocietyCard imageSrc={protege} societyName="LEAN IN" />
        </div>
      </div>
    </div>
  );
}

export default Cohorts;
