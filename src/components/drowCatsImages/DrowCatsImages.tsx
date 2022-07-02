import { iCatsImages } from "../../globalTypes";
import React from "react";

interface Props extends iCatsImages {}

const DrowCatsImages: React.FC<Props> = React.memo(({ url, id }) => {
  return (
    <div className="main__imageBlock">
      <img src={url} alt={id} loading="lazy" className={"main__images"} />
    </div>
  );
});

export default DrowCatsImages;
