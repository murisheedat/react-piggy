import React from "react";

const Button = ({ title, textColor, bgColor }) => {
  return (
    <button
      style={{
        color: `${textColor}`,
        border: "1px solid #0D1826",
        backgroundColor: `${bgColor}`,
      }}
      className="px-5 py-2 rounded-b-xl"
    >
      {title}
    </button>
  );
};

export default Button;
