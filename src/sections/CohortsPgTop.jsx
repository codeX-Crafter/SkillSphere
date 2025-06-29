import React from "react";
import cohorts from "../assets/images/cohorts.png";
import HeadSub from "../components/HeadSub";

function CohortsPgTop() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* 🔷 Full-width Blue Section */}
      <div className="w-full bg-lblue pt-16 md:pt-1 pb-1 px-4 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-1">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <HeadSub
              headSp1="Mentorship Cohorts"
              subSp1="Mentorship cohorts are focused groups where a mentor guides multiple mentees over a set period. They emphasize collaborative learning, skill development, and networking, offering a supportive environment for growth and knowledge sharing."
            />
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 max-w-sm">
            <img
              src={cohorts}
              alt="Mentorship Cohorts"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* 🔴 White Section with Note */}
      <div className="mt-1 text-center px-3 max-w-5xl">
        <p className="text-redd font-bold">
          NOTE: These cohorts are specifically for students studying in Indira
          Gandhi Delhi Technical University for Women (IGDTUW)
        </p>
      </div>
    </section>
  );
}

export default CohortsPgTop;
