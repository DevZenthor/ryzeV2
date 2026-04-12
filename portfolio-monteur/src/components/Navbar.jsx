import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function CustomNavbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/" className="brand-logo">
          Ryze
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/">{t("home")}</Nav.Link>
            <Nav.Link href="/portfolio">{t("portfolio")}</Nav.Link>
            <Nav.Link href="/about">{t("about")}</Nav.Link>
            <Nav.Link href="/contact">{t("contact")}</Nav.Link>

            <div className="ms-3 d-flex gap-2">
              <Button
                size="sm"
                variant="outline-light"
                onClick={() => changeLanguage("fr")}
              >
                FR
              </Button>
              <Button
                size="sm"
                variant="outline-light"
                onClick={() => changeLanguage("en")}
              >
                EN
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;