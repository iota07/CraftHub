import React from "react";

const Posts = (props) => {
  return (
    <figure className="h-1/4 w-1/3 bg-yellow border text-blue border-blue border-opacity-50 rounded mt-20 mx-auto flex flex-col items-center">
      <img className="object-cover w-full h-3/4 rounded-t" src={props.image} alt={props.title} />
      <p className="text-center p-4">{props.text}</p>
    </figure>
  );
};

export default Posts;