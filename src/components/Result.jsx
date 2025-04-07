"use client";
import React from "react";

console.log("shortlink connect");
const Result = ({ response }) => {
  return (
    <div>
      {response.map((value) => (
        <div key={value._id}>
          <p>{value.title}</p>
          <p>{value.url}</p>
        </div>
      ))}
    </div>
  );
};

export default Result;
