import React from "react";

import { DrowCategorys } from "../../components";
import { catsImages } from "../../redux";
import { getCatsImages } from "../../redux/getCatsImages/getCatsImages";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import "./categorys.scss";

const Categorys = () => {
  const dispatch = useAppDispatch();

  const changeId = catsImages.actions.pageId;
  const initalPage = catsImages.actions.initalCurrentPage;

  const categorys = useAppSelector((state) => state.categorys.categorys);

  const [currentCategorys, setCurrentCategorys] = React.useState<number>();

  const changeCurrentCategory = (id: number): void => {
    setCurrentCategorys(id);
    dispatch(changeId(id));
  };

  React.useEffect(() => {
    dispatch(initalPage());

    if (currentCategorys) {
      dispatch(getCatsImages({ id: currentCategorys }));
    }
  }, [currentCategorys]);

  return (
    <header className="categorys">
      <nav className="categorys__nav">
        {categorys.map((el) => {
          return (
            <DrowCategorys
              changeCurrent={changeCurrentCategory}
              {...el}
              key={el.id}
            />
          );
        })}
      </nav>
    </header>
  );
};

export default Categorys;
