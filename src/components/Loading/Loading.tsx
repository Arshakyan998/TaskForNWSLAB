import React from "react";
import "./loading.scss";

interface props {

  finishAnimation?: boolean;
}

const Loading: React.FC<props> = ({ finishAnimation }) => {
  return (
    <div className={!finishAnimation ? "loader finish" : "loader"}>
      <div className="spinner" />
    </div>
  );
};

export default Loading;
