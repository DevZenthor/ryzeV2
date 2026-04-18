import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Background from "../components/Background";
import ryzeImage from "../assets/ryze.jpg";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      {/* Background global premium */}
      <Background />

      <div className="home-content text-center">
        <img src={ryzeImage} alt="Ryze" className="profile-image" />

        <h1 className="ryze-name">Ryze</h1>

        <p className="ryze-title">
          {t("title")}
        </p>

        <Link to="/portfolio" className="btn btn-light mt-3">
          {t("viewPortfolio")}
        </Link>
      </div>
    </div>
  );
}

export default Home;