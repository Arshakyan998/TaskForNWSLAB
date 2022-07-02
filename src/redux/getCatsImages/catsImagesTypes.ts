import { iCatsImages } from "./../../globalTypes";

export interface iInitalState {
  date: iCatsImages[];
  isLoading: boolean;
  error: string;
  currentId:number | null,
  currentPage:number,
  contentLength:number
}

export interface options {
  page?: number;
  id: number;
}
