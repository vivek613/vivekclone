import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`max-w-[1280px] sm:px-8 lg:px-[60px] w-full m-auto ${className}  `}
    >
      {children}
    </div>
  );
};

export default Wrapper;
