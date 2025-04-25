import { LazyExoticComponent, JSX } from "react";

export interface AppRoute {
  name: string;
  path: string;
  component?: LazyExoticComponent<() => JSX.Element>;
  children?: AppRoute[];
}
