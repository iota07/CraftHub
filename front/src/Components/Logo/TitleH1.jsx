import React from "react";

const TitleH1 = (props) => {
  return (
    <section className="pt-24 ps-12 pb-8">
      <h2 className="text-6xl sm:text-2xl md:text-3xl font-dancing lg:text-4xl tracking-tight font-bold text-blue tracking-widest">
        {props.title}
      </h2>
    </section>
  );
};

export default TitleH1;
