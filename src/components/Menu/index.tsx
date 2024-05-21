import "./style.css";
import { Link } from "react-router-dom";
//é possível usar a anchor para mudar, mas ele vai carregar toda a pagina de novo
export function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/" state={"State from home"}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/posts/10">Post 10</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
    </nav>
  );
}
