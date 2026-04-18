import { useTranslation } from "react-i18next";
import { Container, Row, Col, Card } from "react-bootstrap";

import Background from "../components/Background";

function Portfolio() {
  const { t } = useTranslation();

  const videos = [
    "wowI7FifSJU",
    "1ZRZmjaDZb8",
    "F-Ny-j6Z_1A",
    "de0HrFSgHI0",
    "7E_UBlVQhA4",
    "xNW1hISW4hk"
  ];

  return (
    <div className="portfolio-page">
      <Background />

      <Container className="portfolio-content">
        {/* TITLE */}
        <h1 className="section-title">
          {t("portfolio")}
        </h1>

        {/* VIDEOS GRID */}
        <Row className="g-4">
          {videos.map((videoId, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card className="portfolio-card">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;