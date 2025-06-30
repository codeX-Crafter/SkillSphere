import React from "react";
import ResourceCard from "../components/ResourceCard";

function ResourcesSection(props) {
  return (
    <section id={props.id} className="py-10 px-4 sm:px-8 lg:px-24 bg-lblue">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {props.resources.map(function (res, idx) {
          return <ResourceCard key={idx} {...res} />;
        })}
      </div>
    </section>
  );
}

export default ResourcesSection;
