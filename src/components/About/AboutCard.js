import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Williams Lenkeu</span>,
            ingénieur des travaux informatiques et développeur <b>front‑end</b>
            et <b>back‑end</b>.
            <br />
            J'interviens sur des projets web et mobile, avec une expérience en
            <b> React / Next.js</b> et <b>Flutter</b> côté interfaces, ainsi
            qu'en <b>Node.js</b> et <b>Django</b> côté back‑end.
            <br />
            Je suis motivé par la création d'applications utiles, performantes
            et bien conçues.
            <br />
            <br />
            En dehors du code, j'aime apprendre, suivre l'actualité tech et les
            jeux vidéo.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Construire des solutions qui comptent, avec qualité et simplicité."
          </p>
          <footer className="blockquote-footer">Williams</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
