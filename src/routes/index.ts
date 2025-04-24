import { JSX, LazyExoticComponent, lazy } from "react";

export interface Navigation {
  path: string;
  title: string;
  to?: string;
  icon?: string;
  action?: string;
  subject?: string;
  component?: LazyExoticComponent<() => JSX.Element>;
  children?: Navigation[];
}

const navigations: Navigation[] = [
  {
    path: "/",
    title: "Home",
    component: lazy(() => import("@/pages")),
  },
  {
    path: "/states",
    title: "States",
    children: [
      {
        path: "/state1",
        title: "State 1",
        component: lazy(() => import("@/pages/states/state1")),
      },
    ],
  },
];

export default navigations;
