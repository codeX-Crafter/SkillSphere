import React from "react";
import CohortsPgTop from "../sections/CohortsPgTop";
import SocietyCard from "../components/SocietyCard";
import FAQItem from "../components/FAQItem";
import HeadSubh from "../components/HeadSubh";

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
          <SocietyCard
            imageSrc={msl}
            societyName="MICROSOFT LEARN STUDENT AMBASSADOR"
          />
          <SocietyCard imageSrc={techneeds} societyName="TECHNEEDS IGDTUW" />
          <SocietyCard imageSrc={codebenders} societyName="CODEBENDERS" />
          <SocietyCard imageSrc={leanin} societyName="LEAN IN" />
          <SocietyCard imageSrc={protege} societyName="protégé" />
        </div>
      </div>

      {/* FAQs? */}
      <div className="w-full flex flex-col items-center gap-4 mt-16 mb-8">
        <HeadSubh
          headSp1="Frequently Asked Questions"
          subSp1="Your questions, Simplified"
        />
        <FAQItem
          question="What are mentorship cohorts?"
          answer="Mentorship cohorts are structured learning groups organized by various college societies to help students learn and grow in specific domains with the guidance of experienced seniors."
        />
        <FAQItem
          question="Who conducts these cohorts?"
          answer="These cohorts are mostly conducted by students from IGDTUW who are passionate about mentoring and have experience in their respective domains."
        />
        <FAQItem
          question="Are all cohorts the same?"
          answer="No. Each cohort has a different syllabus, mentorship approach, and pace, as they are independently managed by different societies."
        />
        <FAQItem
          question="How can I enroll in a cohort?"
          answer="Each society releases its own enrollment form. Simply click on the Know More button to know the details or the Enroll Now button to access the specific form."
        />
        <FAQItem
          question="Can I join multiple cohorts at once?"
          answer="Yes, you can join multiple cohorts as long as you're able to manage your time and commitment effectively."
        />
        <FAQItem
          question="Are these mentorships paid or free?"
          answer="All the cohorts are completely free and offered as a contribution by the society and its student mentors."
        />
        <FAQItem
          question="Will I get a certificate after completion?"
          answer="This depends on the individual society. Most of them do provide certificates upon successful completion or participation."
        />
      </div>
    </div>
  );
}

export default Cohorts;
