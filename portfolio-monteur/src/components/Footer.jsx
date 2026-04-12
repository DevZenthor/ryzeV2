import { FaDiscord, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Ryze</h3>
          <p>{t("footerDescription")}</p>
          <span className="footer-dev">{t("developedBy")}</span>
        </div>

        <div className="footer-links">
          <Link to="/">{t("home")}</Link>
          <Link to="/portfolio">{t("portfolio")}</Link>
          <Link to="/clients">{t("clients")}</Link>
          <Link to="/legal">{t("legal")}</Link>
        </div>

        <div className="footer-socials">
          <a
            href="https://x.com/RyzeProd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://discord.com/invite/7dqCetz7Yt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>

          
        </div>
      </div>

      <div className="footer-bottom">
        {t("rights")}
      </div>
    </footer>
  );
}

export default Footer;