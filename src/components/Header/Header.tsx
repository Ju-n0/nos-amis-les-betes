import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <nav className="header-nav">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "header-nav-link--active" : "header-nav-link";
          }}
          to={"/"}
        >
          Accueil
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? " header-nav-link--active" : "header-nav-link";
          }}
          to={"/prestations"}
        >
          Nos prestations
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? " header-nav-link--active" : "header-nav-link";
          }}
          to={"/conseils"}
        >
          Nos conseils
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? " header-nav-link--active" : "header-nav-link";
          }}
          to={"/relookings"}
        >
          Nos derniers relookings
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? " header-nav-link--active" : "header-nav-link";
          }}
          to={"/avis"}
        >
          Les avis de nos clients
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? "header-nav-link--active" : "header-nav-link";
          }}
          to={"/rdv"}
        >
          Prendre rendez-vous
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive ? " header-nav-link--active" : "header-nav-link";
          }}
          to={"/contact"}
        >
          Nous contacter
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
