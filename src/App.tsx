import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, JSX } from "react";
import { appRoutes } from "@/routes";
import type { AppRoute } from "@/types/navigation.ts";

const renderRoute = (route: AppRoute): JSX.Element | null => {
  const Element = route.component ? (
    <Suspense fallback={<div>Loading...</div>}>
      <route.component />
    </Suspense>
  ) : undefined;

  if (route.children?.length) {
    return (
      <Route key={route.path} path={route.path} element={Element}>
        {route.children.map((child) => renderRoute(child))}
      </Route>
    );
  }

  return route.component ? (
    <Route key={route.path} path={route.path} element={Element}></Route>
  ) : null;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>{appRoutes.map((route) => renderRoute(route))}</Routes>
    </BrowserRouter>
  );
}

export default App;
