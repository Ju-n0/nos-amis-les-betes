import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="header">
      <nav className="header-nav">
        <NavLink
          className={() => {
            return pathname === "/nos-amis-les-betes"
              ? "header-nav-link--active"
              : "header-nav-link";
          }}
          to={"/nos-amis-les-betes"}
        >
          Accueil
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? " header-nav-link--active" : "header-nav-link";
          }}
          to={"/nos-amis-les-betes/prestations"}
        >
          Nos prestations
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? " header-nav-link--active" : "header-nav-link";
          }}
          to={"/nos-amis-les-betes/conseils"}
        >
          Nos conseils
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? " header-nav-link--active" : "header-nav-link";
          }}
          to={"/nos-amis-les-betes/relookings"}
        >
          Nos derniers relookings
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? " header-nav-link--active" : "header-nav-link";
          }}
          to={"/nos-amis-les-betes/avis"}
        >
          Les avis de nos clients
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? "header-nav-link--active" : "header-nav-link";
          }}
          to={"/nos-amis-les-betes/rdv"}
        >
          Prendre rendez-vous
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? " header-nav-link--active" : "header-nav-link";
          }}
          to={"/nos-amis-les-betes/contact"}
        >
          Nous contacter
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
