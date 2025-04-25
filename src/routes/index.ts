import { lazy } from "react";
import type { AppRoute } from "@/types/navigation";

export const appRoutes: AppRoute[] = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("@/pages")),
  },
  {
    name: "States",
    path: "/states",
    children: [
      {
        name: "State One",
        path: "state1",
        component: lazy(() => import("@/pages/states/State1.tsx")),
      },
      {
        name: "State Two",
        path: "state2",
        component: lazy(() => import("@/pages/states/State2")),
      },
      {
        name: "State Three",
        path: "state3",
        component: lazy(() => import("@/pages/states/State3")),
      },
      {
        name: "State Four",
        path: "state4",
        component: lazy(() => import("@/pages/states/State4")),
      },
      {
        name: "State Five",
        path: "state5",
        component: lazy(() => import("@/pages/states/State5")),
      },
    ],
  },
];
