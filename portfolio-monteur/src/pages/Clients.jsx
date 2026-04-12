import { useTranslation } from "react-i18next";
import {
  Carousel,
  Card,
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";

/* VIDEO BACKGROUND */
import ryzeVideo from "../assets/ryze.mp4";

/* CLIENTS IMAGES */
import asa1 from "../assets/clients/asa.jpg";
import grimz from "../assets/clients/grimz.jpg";
import hedra from "../assets/clients/hedra.jpg";
import marco from "../assets/clients/marco.jpg";
import momsy from "../assets/clients/momsy.jpg";
import noia from "../assets/clients/noia.png";
import prodige1 from "../assets/clients/prodige.jpg";
import seek from "../assets/clients/seek.jpg";
import scroll from "../assets/clients/scroll.jpg";
import sky from "../assets/clients/sky.jpg";
import tjino from "../assets/clients/tjino.jpg";
import vexdylan from "../assets/clients/vexdylan.jpg";
import zarb from "../assets/clients/zarb.jpg";

/* MANAGER CLIENTS */
import asa2 from "../assets/clients/asa.jpg";
import prodige2 from "../assets/clients/prodige.jpg";

function Clients() {
  const { t } = useTranslation();

  const editingClients = [
    { name: "Asa", image: asa1, twitter: "https://x.com/Asafnr" },
    { name: "Grimz", image: grimz, twitter: "https://x.com/coach_grimz" },
    { name: "Hedra", image: hedra, twitter: "https://x.com/HedraFn" },
    { name: "Marco", image: marco, twitter: "https://x.com/MarcoFNBR" },
    { name: "Momsy", image: momsy, twitter: "https://x.com/MomsyFN" },
    { name: "Scroll", image: scroll, twitter: "https://x.com/ScrollSZN" },
    { name: "Noia", image: noia, twitter: "https://x.com/noia_gg" },
    { name: "One Prodige", image: prodige1, twitter: "https://x.com/oneprodige" },
    { name: "Seek", image: seek, twitter: "https://x.com/Seekkfn" },
    { name: "Sky", image: sky, twitter: "https://x.com/SkySZN_" },
    { name: "Tjino", image: tjino, twitter: "https://x.com/Tjino9" },
    { name: "VexDylan", image: vexdylan, twitter: "https://x.com/vexdylan_" },
    { name: "Zarb", image: zarb, twitter: "https://x.com/zarbehtvv" }
  ];

  const managerClients = [
    { name: "Asa", image: asa2, twitter: "https://x.com/Asafnr" },
    { name: "One Prodige", image: prodige2, twitter: "https://x.com/oneprodige" }
  ];

  return (
    <div className="clients-page">
      {/* VIDEO BACKGROUND */}
      <video autoPlay loop muted playsInline className="clients-video-bg">
        <source src={ryzeVideo} type="video/mp4" />
      </video>

      <div className="clients-overlay"></div>

      <Container className="clients-content">
        {/* Clients montage */}
        <h1 className="section-title">{t("clientsEditingTitle")}</h1>

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

        {/* Clients manager */}
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

export default Clients;