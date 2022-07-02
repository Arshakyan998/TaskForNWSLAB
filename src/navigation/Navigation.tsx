import React from "react";
import { Route, Routes } from "react-router-dom";

import { ChoiseCategory } from "../components";
import Leyout from "./Leyout";
import { routes } from "./routes";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Leyout />}>
        <Route index element={<ChoiseCategory />} />
        {routes.map((el) => {
          return (
            <Route path={el.path} element={<el.component />} key={el.path} />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Navigation;
