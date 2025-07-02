import { Github, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/images/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#1D2E4F] text-neutral-100 px-6 py-10 flex flex-col gap-8">
      {/* Top Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_0.5fr_1fr] gap-12">
        {/* Section 1 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className=" font-rubik font-bold text-[45px] text-xl">
              SkillSphere
            </span>
          </div>

          <p>
            Your one-stop platform for curated learning, expert mentorship, and
            a vibrant community for engineering students. We've got you covered!
          </p>
          <div>
            <h3 className="font-semibold mb-2">CONTACT US</h3>
            <ul className="space-y-1 text-sm">
              {/* <li>Phone: +91 8448362122</li> */}
              <a href="mailto:skillsphereee@gmail.com">
                <li>skillsphereee@gmail.com</li>
              </a>
              <li>Rohini, New Delhi - 110085</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col">
          {/* <h3 className="font-semibold mb-2">OTHER LINKS</h3> */}
          <ul className="space-y-1 text-sm">
            {/* <li>FAQS</li>
            <li>Events</li>
            <li>Success stories</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li> */}
          </ul>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">SOCIALS</h3>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://www.instagram.com/skilllsphereee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/in/harshita-bansal-65ba40327/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            {/* <Github /> */}
          </div>
          <ul className="space-y-1 text-sm">
            {/* <li>Collaborate with SkillSphere!</li> */}
            <li>Reach out to us at -</li>
            <a href="mailto:skillsphereee@gmail.com" className="mt-2">
              {" "}
              <li>SkillSphereee@gmail.com</li>
            </a>
          </ul>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="text-s text-neutral-200">
        <p>
          Disclaimer: All the study resources hosted on resources are provided
          for informational and educational purposes only. We do not claim
          ownership of any of the resources available on the website.
        </p>
      </div>
    </footer>
  );
}
