import { Main } from "../pages";

export enum links {
  main = "/main/:id",
}

export const routes = [{ component: Main, path: links.main }];
