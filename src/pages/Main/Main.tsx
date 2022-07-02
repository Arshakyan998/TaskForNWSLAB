import React from "react";

import { DrowCatsImages } from "../../components/";
import { catsImages } from "../../redux";
import { getCatsImages } from "../../redux/getCatsImages/getCatsImages";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import "./main.scss";

const Main = () => {
  const dispatch = useAppDispatch();

  const date = useAppSelector((state) => state.catsImages.date);

  const changeCurrentPage = catsImages.actions.changeCurrenPage;

  const currentPageId = useAppSelector((state) => state.catsImages.currentId);
  const currentPage = useAppSelector((state) => state.catsImages.currentPage);

  const isLoading = useAppSelector((state) => state.catsImages.isLoading);
  const error = useAppSelector((state) => state.catsImages.error);

  const loadMore = () => {
    dispatch(changeCurrentPage());
    dispatch(getCatsImages({ id: currentPageId!, page: currentPage }));
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="main">
      <div className="main__images">
        {date.map((el, i) => {
          return <DrowCatsImages key={el.id + " " + i} {...el} />;
        })}
      </div>
      <div>
        {isLoading ? (
           <div className="main__loadTitle"> 
          <h1 >Loading ...</h1>
          </div>
        ) : (
          <div className="main__loadBtn">
            <button onClick={loadMore} className="main__btn">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
