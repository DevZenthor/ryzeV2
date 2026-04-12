import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import ryzeVideo from "../assets/ryze.mp4";

function Legal() {
  const { i18n } = useTranslation();

  const isFrench = i18n.language === "fr";

  return (
    <div className="legal-page">
      {/* VIDEO BACKGROUND */}
      <video autoPlay loop muted playsInline className="legal-video-bg">
        <source src={ryzeVideo} type="video/mp4" />
      </video>

      <div className="legal-overlay"></div>

      <Container className="legal-content">
        <h1 className="legal-title">
          {isFrench ? "Mentions Légales" : "Legal Notice"}
        </h1>

        {isFrench ? (
          <>
            <section className="legal-section">
              <h2>1. Éditeur du site</h2>
              <p>
                Le présent site Ryze Portfolio est édité par Ryze, monteur vidéo
                indépendant spécialisé en highlights vidéo.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Hébergement</h2>
              <p>
                Le site est hébergé par :
                <br />
                Vercel Inc.
                <br />
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789
                <br />
                États-Unis
              </p>
              <p>
                Des services tiers complémentaires peuvent également être utilisés
                selon les besoins techniques du site.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Propriété intellectuelle</h2>
              <p>
                Tous les contenus présents sur ce site (vidéos, images, textes,
                logos, créations graphiques) sont protégés par les lois relatives
                à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, distribution ou utilisation sans autorisation
                écrite préalable est strictement interdite.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Responsabilité</h2>
              <p>
                L’éditeur s’efforce de fournir des informations exactes et mises à
                jour, mais ne saurait garantir l’exactitude absolue des contenus.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Données personnelles</h2>
              <p>
                Ce site ne collecte pas de données personnelles sensibles sans
                consentement explicite.
              </p>
              <p>
                Les éventuels formulaires de contact ou liens externes sont soumis
                aux politiques de confidentialité des services utilisés.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Contact</h2>
              <p>
                Pour toute question :
                <br />
                Discord officiel : https://discord.com/invite/7dqCetz7Yt
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="legal-section">
              <h2>1. Website Publisher</h2>
              <p>
                This Ryze Portfolio website is published by Ryze, independent
                video editor specialized in highlight editing.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Hosting</h2>
              <p>
                This website is hosted by:
                <br />
                Vercel Inc.
                <br />
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789
                <br />
                United States
              </p>
              <p>
                Additional third-party services may also be used depending on
                technical requirements.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Intellectual Property</h2>
              <p>
                All content on this website (videos, images, texts, logos,
                graphic creations) is protected under intellectual property laws.
              </p>
              <p>
                Any reproduction or unauthorized use is strictly prohibited.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Liability</h2>
              <p>
                The publisher strives to provide accurate and updated information
                but cannot guarantee absolute accuracy.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Personal Data</h2>
              <p>
                This website does not collect sensitive personal data without
                explicit consent.
              </p>
              <p>
                Any external forms or links are subject to their own privacy
                policies.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Contact</h2>
              <p>
                For any inquiries:
                <br />
                Official Discord: https://discord.com/invite/7dqCetz7Yt
              </p>
            </section>
          </>
        )}
      </Container>
    </div>
  );
}

export default Legal;