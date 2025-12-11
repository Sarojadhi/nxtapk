"use client"; 

import React from "react";

const AddClick = () => {
  return (
    <div>
      <button onClick={() => console.log("clicked the button")}>
        Click me
      </button>
    </div>
  );
};

export default AddClick;
