import React from "react";
import ResourcesSection from "../ResourcesSection";

export default function Ytchannels() {
  const ytResources = [
    {
      title: "Philipp Lackner",
      desc: "Android/Kotlin, practical projects, modern Android dev",
      link: "https://www.youtube.com/@PhilippLackner",
      tags: ["Android", "Kotlin"],
    },
    {
      title: "freeCodeCamp.org",
      desc: "Full-length courses for Android, Flutter, React Native—great for structured, in-depth learning",
      link: "https://www.youtube.com/c/Freecodecamp",
      tags: ["Structured", "Full Courses"],
    },

    {
      title: "CodeWithChris",
      desc: "iOS/Swift/Xcode, beginner-friendly, step-by-step iOS apps",
      link: "https://www.youtube.com/@CodeWithChris",
      tags: ["iOS", "Swift", "Xcode"],
    },
  ];
  return <ResourcesSection id="app-dev-ytchannels" resources={ytResources} />;
}
