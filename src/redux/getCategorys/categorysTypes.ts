import { iCategorys } from "./../../globalTypes";

export interface iInitalState {
  categorys: iCategorys[];
  isLoading: boolean;
  error: string;
}
