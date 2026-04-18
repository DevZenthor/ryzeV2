import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h3>Ryze</h3>
          <p>{t("footerDescription")}</p>
          <span className="footer-dev">
            {t("developedBy")}
          </span>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <Link to="/">
            {t("home")}
          </Link>

          <Link to="/highlights">
            {t("portfolio")}
          </Link>

          <Link to="/legal">
            {t("legal")}
          </Link>
        </div>

        {/* SOCIALS */}
        <div className="footer-socials">
          <a
            href="https://x.com/RyzeProd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://discord.com/invite/7dqCetz7Yt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        {t("rights")}
      </div>
    </footer>
  );
}

export default Footer;