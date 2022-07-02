import React from "react";
import { NavLink } from "react-router-dom";

import { iCategorys } from "../../globalTypes";

interface Props extends iCategorys {
  changeCurrent: (id: number) => void;
}

const DrowCategorys: React.FC<Props> = React.memo(
  ({ id, name, changeCurrent }) => {
    const changeCurrentCategory = () => {
      changeCurrent(id);
    };

    return (
      <NavLink
        to={`/main/${id}`}
        onClick={changeCurrentCategory}
        className={({ isActive }) => {
          return isActive
            ? "categorys__link categorys__link-active"
            : "categorys__link";
        }}
      >
        {name}
      </NavLink>
    );
  }
);

export default DrowCategorys;
