import { useTranslation } from "react-i18next";
import {
  Container,
  Row,
  Col,
  Card,
  Carousel,
  Button
} from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";

import Background from "../components/Background";

/* Clients images */
import asa from "../assets/clients/asa.jpg";
import grimz from "../assets/clients/grimz.jpg";
import hedra from "../assets/clients/hedra.jpg";
import marco from "../assets/clients/marco.jpg";
import momsy from "../assets/clients/momsy.jpg";
import noia from "../assets/clients/noia.png";
import prodige from "../assets/clients/prodige.jpg";
import seek from "../assets/clients/seek.jpg";
import scroll from "../assets/clients/scroll.jpg";
import sky from "../assets/clients/sky.jpg";
import tjino from "../assets/clients/tjino.jpg";
import vexdylan from "../assets/clients/vexdylan.jpg";
import zarb from "../assets/clients/zarb.jpg";

function Portfolio() {
  const { t } = useTranslation();

  /* Videos */
  const videos = [
    "wowI7FifSJU",
    "1ZRZmjaDZb8",
    "F-Ny-j6Z_1A",
    "de0HrFSgHI0",
    "7E_UBlVQhA4",
    "xNW1hISW4hk"
  ];

  /* Clients montage */
  const editingClients = [
    { name: "Asa", image: asa, twitter: "https://x.com/Asafnr" },
    { name: "Grimz", image: grimz, twitter: "https://x.com/coach_grimz" },
    { name: "Hedra", image: hedra, twitter: "https://x.com/HedraFn" },
    { name: "Marco", image: marco, twitter: "https://x.com/MarcoFNBR" },
    { name: "Momsy", image: momsy, twitter: "https://x.com/MomsyFN" },
    { name: "Noia", image: noia, twitter: "https://x.com/noia_gg" },
    { name: "Prodige", image: prodige, twitter: "https://x.com/oneprodige" },
    { name: "Seek", image: seek, twitter: "https://x.com/Seekkfn" },
    { name: "Scroll", image: scroll, twitter: "https://x.com/ScrollSZN" },
    { name: "Sky", image: sky, twitter: "https://x.com/SkySZN_" },
    { name: "Tjino", image: tjino, twitter: "https://x.com/Tjino9" },
    { name: "VexDylan", image: vexdylan, twitter: "https://x.com/vexdylan_" },
    { name: "Zarb", image: zarb, twitter: "https://x.com/zarbehtvv" }
  ];

  /* Manager clients */
  const managerClients = [
    { name: "Asa", image: asa, twitter: "https://x.com/Asafnr" },
    { name: "Prodige", image: prodige, twitter: "https://x.com/oneprodige" }
  ];

  return (
    <div className="portfolio-page">
      <Background />

      <Container className="portfolio-content">

        {/* SECTION VIDEOS */}
        <h1 className="section-title">{t("portfolio")}</h1>

        <Row className="g-4">
          {videos.map((videoId, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="portfolio-card">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Video ${index}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CLIENTS EDITING */}
        <h1 className="section-title second-title">
          {t("clientsEditingTitle")}
        </h1>

        <Carousel
          indicators
          controls
          interval={2500}
          className="clients-carousel"
        >
          {editingClients.map((client, index) => (
            <Carousel.Item key={index}>
              <div className="client-slide">
                <img
                  src={client.image}
                  alt={client.name}
                  className="client-image"
                />

                <h3>{client.name}</h3>

                <a
                  href={client.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="twitter-btn">
                    <FaXTwitter />
                    Profile
                  </Button>
                </a>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* MANAGER */}
        <h1 className="section-title second-title">
          {t("youtubeManagerTitle")}
        </h1>

        <Row className="manager-grid">
          {managerClients.map((client, index) => (
            <Col key={index} className="manager-col">
              <Card className="manager-card">
                <Card.Img
                  variant="top"
                  src={client.image}
                  className="manager-image"
                />

                <Card.Body>
                  <Card.Title>{client.name}</Card.Title>

                  <a
                    href={client.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="twitter-btn">
                      <FaXTwitter />
                      Profile
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
}

export default Portfolio;