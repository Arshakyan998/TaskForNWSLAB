import React from "react";
import { Outlet } from "react-router-dom";
import { Categorys } from "../pages";

import "./leyout.scss";

type Props = {};

const Leyout = () => {
  return (
    <div className="leyout">
      <Categorys />
      <Outlet />
    </div>
  );
};

export default Leyout;
