import { useTranslation } from "react-i18next";
import ryzeVideo from "../assets/ryze.mp4";
import ryzeImage from "../assets/ryze.jpg";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={ryzeVideo} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="home-content text-center">
        <img src={ryzeImage} alt="Ryze" className="profile-image" />
        <h1 className="ryze-name">Ryze</h1>
        <p className="ryze-title">{t("title")}</p>

        <a href="/portfolio" className="btn btn-light mt-3">
          {t("viewPortfolio")}
        </a>
      </div>
    </div>
  );
}

export default Home;