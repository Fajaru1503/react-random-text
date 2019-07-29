import React from "react";

const randomButton = () => {
  const style = {
    backgroundColor: "white",
    border: "1px solid #d9d9d9",
    borderRadius: "6px",
    cursor: "pointer",
    display: "block",
    margin: "auto",
    outline: "none",
    padding: "12px"
  };

  return <button style={style}>Let's Go!</button>;
};

export default randomButton;
