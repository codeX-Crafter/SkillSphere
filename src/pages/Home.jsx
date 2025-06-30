import React from "react";

import HeadSub from "../components/HeadSub";
import HeadSubh from "../components/HeadSubh";
import Button from "../components/button";
import Features from "../components/Features";
import DomainCard from "../components/DomainCard";
import FAQItem from "../components/FAQItem";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import herofront from "../assets/images/herofront.png";
import journey from "../assets/images/journey.png";
import learning from "../assets/images/learning.png";
import tuition from "../assets/images/tuition.png";
import spiral from "../assets/images/spiral-bound-booklet.png";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center  mt-14 gap-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row  items-center justify-center gap-10 w-full max-w-7xl">
        <div>
          <img
            src={herofront}
            alt="Hero"
            className="heroimg object-contain w-full max-w-[420px] h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-center">
          <HeadSub
            headSp1="Your Launchpad for "
            headSp2="Building In-Demand Skills"
            subSp1="Your future in tech starts here, explore resources, join "
            subSp2="cohorts, and take the first step toward success."
          />
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 w-full md:w-auto">
            <HashLink smooth to="/#domains">
              <Button text="Browse Resources" />
            </HashLink>
            <Link to="/Cohorts">
              <Button text="Explore Cohorts" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full flex flex-col items-center gap-6">
        <HeadSubh
          headSp1="Why choose us?"
          subSp1="No more scattered content — just structured, centralized "
          subSp2="resources to guide your learning journey."
        />
        <div className="flex flex-wrap justify-center gap-3 px-2 w-full max-w-7xl ">
          <Features
            image={journey}
            bgColor="bg-[#6D2E46]"
            head="Structured Roadmaps"
            subHead="Step-by-step learning paths tailored to your goals"
          />
          <Features
            image={spiral}
            bgColor="bg-[#EBA83A]"
            head="Exclusive Resources"
            subHead="Curated materials to deepen your knowledge"
          />
          <Features
            image={tuition}
            bgColor="bg-[#B23A48]"
            head="Expert Mentorship"
            subHead="Learn from experienced professionals"
          />
          <Features
            image={learning}
            bgColor="bg-[#3BBA9C]"
            head="Flexible Learning"
            subHead="Learn anytime, anywhere at your pace"
          />
        </div>
      </div>

      {/*Domains */}
      <div
        id="domains"
        className="w-full flex flex-col items-center gap-6 mt-6"
      >
        <HeadSubh
          headSp1="Featured Domains"
          subSp1="Discover tailored learning paths designed to guide you "
          subSp2="step by step toward success."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          <Link to="/DSA">
            <DomainCard domainName="DSA" bgClass="bg-redd" />
          </Link>
          <Link to="/WebDevelopment">
            <DomainCard domainName="WEB DEVELOPMENT" bgClass="bg-yell" />
          </Link>
          <Link to="/AppDevelopment">
            <DomainCard domainName="APP DEVELOPMENT" bgClass="bg-tealish" />
          </Link>
          <Link to="/UIUX">
            <DomainCard domainName="UI/UX" bgClass="bg-maroon" />
          </Link>
          <Link to="/CompetitiveProgramming">
            <DomainCard
              domainName="COMPETITIVE PROGRAMMING"
              bgClass="bg-maroon"
            />
          </Link>
          <Link to="/AIML">
            <DomainCard domainName="AI/ML" bgClass="bg-tealish" />
          </Link>
          <Link to="/ARVR">
            <DomainCard domainName="AR/VR" bgClass="bg-yell" />
          </Link>
          <Link to="/Cybersecurity">
            <DomainCard domainName="CYBERSECURITY" bgClass="bg-redd" />
          </Link>
        </div>
      </div>

      {/* FAQs? */}
      <div
        id="faq"
        className="w-full flex flex-col items-center gap-4 mt-6 mb-8"
      >
        <HeadSubh
          headSp1="Frequently Asked Questions"
          subSp1="Your questions, Simplified"
        />
        <FAQItem
          question="What exactly does this platform offer?"
          answer="This platform is designed for students to explore different tech domains through mentorship and a centralized resource hub—helping you learn smarter, not harder."
        />
        <FAQItem
          question="How is this different from just Googling stuff?"
          answer="Instead of wasting hours digging through scattered links, we give you trusted, pre-verified resources and clear progression—no overwhelm, just clarity."
        />
        <FAQItem
          question="Can I switch domains later?"
          answer="Of course! Learning isn’t linear. You can explore multiple domains and even find overlaps—like UI/UX + Web Dev or AI + App Dev."
        />
        <FAQItem
          question="Who are the mentors?"
          answer="Our mentors include senior students, folks who’ve walked the path and are ready to guide you with actionable advice."
        />
        <FAQItem
          question="How can I contribute to this platform?"
          answer="You can suggest resources, submit your own roadmap, write a student story, or become a mentor. We’re building this together."
        />
      </div>
    </div>
  );
}

export default Home;
