import { appRoutes } from "@/routes";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <ul>
        {appRoutes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
