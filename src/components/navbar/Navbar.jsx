import React, { useCallback, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logo.png";
import Button from "../Button/Button";
import GetStartedButton from "../Button/GetStartedButton";
import "./Navbar.css";

const navLinks = [
  {
    path: "how-it-works",
    label: "How it works",
  },
  {
    path: "solved-cases",
    label: "Solved cases",
  },
  {
    path: "our-team",
    label: "Our team",
  },
];

const Navbar = ({ isDesktop }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = useCallback((show) => {
    setShowNav(show);
  }, []);

  const navItems = useMemo(
    () => (
      <ul>
        {navLinks.map((navItem) => (
          <li key={navItem.path}>
            <NavLink
              className="navbar-link"
              to={`/${navItem.path}`}
              onClick={() => {
                if (!isDesktop) toggleShowNav(false);
              }}
            >
              {navItem.label}
            </NavLink>
          </li>
        ))}
        <li>
          <GetStartedButton
            color={isDesktop ? "primary" : "secondary"}
            callback={isDesktop ? null : () => toggleShowNav(!showNav)}
          />
        </li>
      </ul>
    ),
    [isDesktop, showNav, toggleShowNav]
  );

  return (
    <>
      <div className="row">
        <div className="col-12">
          <header className="navbar">
            <Link className="navbar-brand-link" to="/">
              <img className="navbar-brand-image" src={logo} alt="logo" />
            </Link>
            {isDesktop ? (
              navItems
            ) : (
              <>
                <div className="navbar-mobile-container">
                  <button
                    className="btn navbar-trigger"
                    onClick={() => toggleShowNav(!showNav)}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </button>
                  {!isDesktop && showNav ? (
                    <div className="navbar-mobile">
                      <Button
                        color="secondary"
                        className="btn navbar-trigger"
                        onClick={() => toggleShowNav(!showNav)}
                      >
                        <i className="fa-solid fa-times"></i>
                      </Button>
                      {navItems}
                    </div>
                  ) : null}
                </div>
                {showNav ? (
                  <div
                    onClick={() => toggleShowNav(false)}
                    className="navbar-backdrop"
                  />
                ) : null}
              </>
            )}
          </header>
        </div>
      </div>
      <div className="navbar-spacer" />
    </>
  );
};

export default Navbar;
