import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import frFlag from "../assets/fr.png";
import ukFlag from "../assets/uk.png";

function CustomNavbar() {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const currentFlag = currentLang === "fr" ? frFlag : ukFlag;
  const currentLabel = currentLang === "fr" ? "FR" : "EN";

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="brand-logo">
          Ryze
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav">
          <HiOutlineMenuAlt3 color="#1DE5FE" size={28} />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center nav-links-group">
            <Nav.Link href="/">{t("home")}</Nav.Link>
            <Nav.Link href="/portfolio">{t("portfolio")}</Nav.Link>
            <Nav.Link href="/about">{t("about")}</Nav.Link>
            <Nav.Link href="/contact">{t("contact")}</Nav.Link>

            {/* Bouton langue unique */}
            <button className="language-toggle-btn" onClick={toggleLanguage}>
              <img src={currentFlag} alt={currentLabel} className="flag-icon" />
              <span>{currentLabel}</span>
            </button>

            <Button className="contact-btn">
              {t("contact")}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;