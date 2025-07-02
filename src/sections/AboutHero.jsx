import React from "react";
import logo from "../assets/images/logo.jpg";

function AboutHero() {
  return (
    <section className="flex flex-wrap-reverse gap-5 justify-center items-center bg-black text-white py-16 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-5 text-base sm:text-lg leading-relaxed font-mono">
          <p className=" text-gray-300 mt-2">The Dino who didn’t fit in.</p>
          <p>They called it ancient.</p>
          <p>Too slow to catch up.</p>
          <p>Too curious to follow the crowd.</p>
          <p>Too stubborn to settle for scraps of tutorials.</p>
          <p>
            So it built its own map.
            <br />
            And left it behind for the next lost one.
          </p>
          <p className="text-purple-400 mt-4">This platform is that map.</p>
          <p className="font-semibold tracking-wide text-gray-300 mt-6">
            Welcome to the Dino side.
          </p>
          {/* CTA */}
          <div className="mt-10">
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition-all duration-200">
              Explore the Map
            </button>
          </div>
        </div>
      </div>

      {/* Dino watermark */}
      <img
        src={logo}
        alt="Dino"
        className=" inset-0 w-72 opacity-70 pointer-events-none select-none rounded-full"
      />
    </section>
  );
}

export default AboutHero;
