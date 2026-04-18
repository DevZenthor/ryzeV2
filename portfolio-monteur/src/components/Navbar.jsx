import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import frFlag from "../assets/fr.png";
import ukFlag from "../assets/uk.png";

function CustomNavbar() {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const currentLang = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "fr" ? "en" : "fr");
  };

  const currentFlag = currentLang === "fr" ? frFlag : ukFlag;
  const currentLabel = currentLang === "fr" ? "FR" : "EN";

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="custom-navbar"
    >
      <Container>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          Ryze
        </Navbar.Brand>

        {/* BURGER */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="custom-toggler"
        >
          {expanded ? (
            <HiX color="#1DE5FE" size={30} />
          ) : (
            <HiOutlineMenuAlt3 color="#1DE5FE" size={30} />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center nav-links-group mobile-nav">

            {/* HOME */}
            <Nav.Link as={Link} to="/" onClick={closeMenu}>
              {t("home")}
            </Nav.Link>

            {/* HIGHLIGHTS */}
            <Nav.Link as={Link} to="/highlights" onClick={closeMenu}>
              {t("highlights")}
            </Nav.Link>

            {/* LANGUAGE */}
            <button
              className="language-toggle-btn"
              onClick={toggleLanguage}
            >
              <img
                src={currentFlag}
                alt={currentLabel}
                className="flag-icon"
              />
              <span>{currentLabel}</span>
            </button>

            {/* CONTACT */}
            <a
              href="https://discord.com/invite/7dqCetz7Yt"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-link-btn"
              onClick={closeMenu}
            >
              <Button className="contact-btn">
                {t("contact")}
              </Button>
            </a>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;