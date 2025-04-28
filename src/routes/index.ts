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
      {
        name: "State Six",
        path: "state6",
        component: lazy(() => import("@/pages/states/State6")),
      },
    ],
  },
  {
    name: "Effects",
    path: "/effects",
    children: [
      {
        name: "Effect One",
        path: "effect1",
        component: lazy(() => import("@/pages/effects/Effect1")),
      },
      {
        name: "Effect Two",
        path: "effect2",
        component: lazy(() => import("@/pages/effects/Effect2")),
      },
      {
        name: "Effect Three",
        path: "effect3",
        component: lazy(() => import("@/pages/effects/Effect3")),
      },
      {
        name: "Effect Four",
        path: "effect4",
        component: lazy(() => import("@/pages/effects/Effect4")),
      },
      {
        name: "Effect Five",
        path: "effect5",
        component: lazy(() => import("@/pages/effects/Effect5")),
      },
    ],
  },
  {
    name: "Layout Effect",
    path: "/layouteffects",
    children: [
      {
        name: "Layout Effect One",
        path: "layouteffect1",
        component: lazy(() => import("@/pages/layoutEffects/LayoutEffect1")),
      },
    ],
  },
  {
    name: "General",
    path: "/generals",
    children: [
      {
        name: "One",
        path: "one",
        component: lazy(() => import("@/pages/generals/one")),
      },
      {
        name: "Two",
        path: "two",
        component: lazy(() => import("@/pages/generals/two")),
      },
      {
        name: "Three",
        path: "three",
        component: lazy(() => import("@/pages/generals/three")),
      },
      {
        name: "Four",
        path: "four",
        component: lazy(() => import("@/pages/generals/four")),
      },
      {
        name: "Five",
        path: "five",
        component: lazy(() => import("@/pages/generals/five")),
      },
    ],
  },
];
