import React from "react";

const FlutterIcon = ({ size = 50, className = "", style = {} }) => {
  return (
    <img 
      src={require("../../assets/icons/flutter.svg").default}
      alt="Flutter"
      width={size}
      height={size}
      className={className}
      style={style}
    />
  );
};

export default FlutterIcon;
