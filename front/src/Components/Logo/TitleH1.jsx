import React from "react";

const TitleH1 = (props) => {
  return (
    <section>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-dancing lg:text-6xl font-bold text-blue">
        {props.title}
      </h1>
    </section>
  );
};

export default TitleH1;
