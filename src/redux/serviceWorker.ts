import axios from "axios";

import { iCategorys, iCatsImages } from "./../globalTypes";

const mainUrl = axios.create({
  baseURL: process.env.REACT_APP_GET_DATE,
});

abstract class serviceWorker {
  static getCategorysAsync = async (): Promise<iCategorys[]> => {
    const response = await axios.get<iCategorys[]>(
      process.env.REACT_APP_GET_CATEGORYS!
    );

    const data = await response.data;

    return data;
  };

  static getCatsImages = async (
    page: number = 1,
    id: number
  ): Promise<iCatsImages[]> => {
    const response = await mainUrl.get<iCatsImages[]>(
      `search?limit=10&page=${page}&category_ids=${id}`
    );
 
    const data = await response.data;

    return data;
  };
}

export default serviceWorker;
