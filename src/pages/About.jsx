import React from "react";
import AboutHero from "../sections/AboutHero";

function About() {
  return (
    <div>
      <AboutHero />
      <section className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-6 font-mono">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">
            So, what is this place?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            It’s not just another platform.
            <br />
            It’s a quiet corner for the curious — built for the ones figuring
            things out, one step at a time.
            <br />
            Whether you're into UI/UX, Web Dev, ML, or still exploring, this
            space is for engineering students who'd rather <em>
              learn deeply
            </em>{" "}
            than scroll endlessly.
            <br />
            <br />
            This isn't about being everywhere. It’s about starting somewhere
            that <em>actually helps</em>.
          </p>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-6 font-mono">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">
            The Dino Way 🦕
          </h2>
          <div className="space-y-3 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>No one’s rushing here.</p>
            <p>No one’s pretending either.</p>
            <p>We don’t chase ten things at once.</p>
            <p>We go deep into one — then move to the next.</p>
            <p>
              We ask dumb questions, build clumsy projects, and learn out loud.
            </p>
            <p>No shortcuts. No noise.</p>
            <p>Just slow, stubborn, honest learning.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-6 font-mono">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">
            Not really a team, not really alone.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            This platform may have been pieced together by one person — but it
            carries the voice of many. It wouldn't exist without the seniors who
            answered questions, the mentors who shared their stories, and the
            people who believed learning could be different.
            <br />
            <br />
            It’s not about credits. It’s about continuation. If this helps even
            one person the way I was helped — it’s working.
          </p>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-6 font-mono">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">
            Want to contribute?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            This map isn’t finished — and it never will be. You can leave your
            mark too.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 text-base sm:text-lg">
            <li>
              Found a resource that helped you? Or curated your own? Share it.
            </li>
            <li>
              Want to contribute tips, a story, or something you wish you knew
              earlier? Send it over.
            </li>
            <li>
              Register as a mentor via your society’s form — and guide someone
              like you.
            </li>
            {/* <li>
              Know code? Raise a PR on the
              <a
                href="https://github.com/codeX-Crafter/SkillSphere"
                className="text-purple-400 underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repo
              </a>
              .
            </li> */}
            <li>
              Or just drop a mail at :
              <a
                href="mailto:skillsphereee@gmail.com"
                className="text-purple-400 underline ml-1"
              >
                skillsphereee@gmail.com
              </a>
              .
            </li>
          </ul>
          <p className="text-gray-400 mt-4">
            Contributions can be small. What matters is that they’re real.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
