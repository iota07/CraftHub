import React from "react";

const TitleH1 = (props) => {
  return (
    <section>
      <h1 className="text-6xl sm:text-2xl md:text-3xl font-dancing lg:text-4xl font-bold text-blue">
        {props.title}
      </h1>
    </section>
  );
};

export default TitleH1;
