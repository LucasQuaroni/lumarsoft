import React from "react";

const WhyUsObject = ({ icon, title, description,styleIcon }) => {
  return (
    <div className="max-w-[300px] mx-auto">
      <p className="text-base flex justify-center flex-col">
        <span className={styleIcon}>{icon}</span>
        <b className="text-white">{title}</b>
        <span className="text-[#999999] block">{description}</span>
      </p>
    </div>
  );
};

export default WhyUsObject;
