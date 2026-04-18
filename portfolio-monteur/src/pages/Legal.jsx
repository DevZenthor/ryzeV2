import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import Background from "../components/Background";

function Legal() {
  const { i18n } = useTranslation();

  const isFrench = i18n.language === "fr";

  return (
    <div className="legal-page">
      {/* BACKGROUND GLOBAL */}
      <Background />

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
                Des services tiers complémentaires peuvent être utilisés selon les
                besoins techniques du site.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Propriété intellectuelle</h2>
              <p>
                Tous les contenus présents sur ce site (textes, images, vidéos,
                identité visuelle, créations graphiques) sont protégés par les
                lois en vigueur.
              </p>

              <p>
                Toute reproduction totale ou partielle sans autorisation écrite
                préalable est interdite.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Responsabilité</h2>
              <p>
                Les informations diffusées sont fournies à titre indicatif.
                L’éditeur ne saurait être tenu responsable d’éventuelles erreurs.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Données personnelles</h2>
              <p>
                Ce site ne collecte aucune donnée personnelle sensible sans
                consentement explicite.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Contact</h2>
              <p>
                Discord officiel :
                <br />
                https://discord.com/invite/7dqCetz7Yt
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="legal-section">
              <h2>1. Website Publisher</h2>
              <p>
                This Ryze Portfolio website is published by Ryze, independent
                video editor specialized in highlights.
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
                Additional technical third-party services may also be used when
                required.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Intellectual Property</h2>
              <p>
                All content on this website (texts, images, videos, visual
                identity, graphics) is protected by applicable laws.
              </p>

              <p>
                Any reproduction without prior written permission is prohibited.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Liability</h2>
              <p>
                Information is provided for guidance only. The publisher cannot
                guarantee absolute accuracy.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Personal Data</h2>
              <p>
                This website does not collect sensitive personal data without
                explicit consent.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Contact</h2>
              <p>
                Official Discord:
                <br />
                https://discord.com/invite/7dqCetz7Yt
              </p>
            </section>
          </>
        )}
      </Container>
    </div>
  );
}

export default Legal;