import React from "react";
import ResourcesSection from "../ResourcesSection";

export default function MiscellaneousUX() {
  const miscResources = [
    {
      title: "Growth Design Case Studies",
      desc: "In-depth case studies on product design, UX, and user research.",
      link: "https://growth.design/case-studies",
      tags: ["Case Studies", "UX", "Product Design"],
    },
    {
      title: "The Design of Everyday Things",
      desc: "Classic book by Don Norman on user-centered design principles.",
      link: "https://www.bing.com/ck/a?!&&p=502870730acbca1770484aea2149473dca2d9f49783226e3890dcbed1aa40508JmltdHM9MTc1MTQxNDQwMA&ptn=3&ver=2&hsh=4&fclid=2933800b-3cf9-6194-0f67-96023d4b60ca&psq=the+design+of+everyday+things+pdf&u=a1aHR0cHM6Ly9kNWxuMzhwMzc1NHljLmNsb3VkZnJvbnQubmV0L2NvbnRlbnRfb2JqZWN0X3NoYXJlZF9maWxlcy8yOTRiMzI0ZWQxN2I0Y2JhOTA1YzRjMzk0ZmQ3ZGQ2MjA2MTMxZTkwL1RoZS1EZXNpZ24tb2YtRXZlcnlkYXktVGhpbmdzLVJldmlzZWQtYW5kLUV4cGFuZGVkLUVkaXRpb24ucGRmPzE0OTU3NTkyNzk&ntb=1",
      tags: ["Book", "User-Centered Design", "Classic"],
    },
    // {
    //   title: "Practical UI",
    //   desc: "A collection of practical UI design resources, including articles, tools, and inspiration.",
    //   link: "",
    //   tags: ["eBooks", "UX", "Learning"],
    // },
  ];

  return <ResourcesSection id="miscellaneous" resources={miscResources} />;
}
