import React from "react";

const TitleH1 = (props) => {
  return (
    <section>
      <h1 className="text-4xl sm:text-4xl md:text-4xl font-dancing lg:text-5xl font-bold text-blue">
        {props.title}
      </h1>
    </section>
  );
};

export default TitleH1;
