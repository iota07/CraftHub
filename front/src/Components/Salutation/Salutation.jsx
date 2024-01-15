import React from "react";

const Salutation = (props) => {
  return (
    <article className="text-lg font-roboto">
      Hi, <span>{props.username}</span>
    </article>
  );
};

export default Salutation;
