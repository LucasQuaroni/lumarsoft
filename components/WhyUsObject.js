import React from "react";

const WhyUsObject = ({ icon, title, description }) => {
  return (
    <div className="max-w-[300px] mx-auto">
      <p className="text-base">
        {icon}
        <b className="text-white">{title}</b>
        <span className="text-[#999999] block">{description}</span>
      </p>
    </div>
  );
};

export default WhyUsObject;
