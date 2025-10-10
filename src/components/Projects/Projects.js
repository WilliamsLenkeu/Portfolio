import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">projets</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques réalisations sur lesquelles j'ai travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Plateforme d’inscriptions aux formations"
              description="Application web responsive pour gérer les inscriptions aux formations: création des sessions, formulaires, export des données et suivi des inscriptions."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="App mobile de communication (Flutter)"
              description="Application Flutter pour la communication et le partage d’informations au sein d’un groupe: navigation moderne, notifications et stockage cloud."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Back‑end Django pour application web"
              description="Développement d’une application web avec Django: authentification, gestion des rôles, modèles relationnels et interface d’administration. Méthodologie agile."
              ghLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="API NestJS pour orientation académique"
              description="Conception et implémentation d’une API REST avec NestJS pour les endpoints d’une plateforme d’orientation académique: sécurisation JWT, validation DTO et documentation Swagger."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Site vitrine responsive"
              description="Conception d’un site vitrine performant: maquettes, intégration responsive, animations légères et optimisation SEO de base."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="App mobile d’orientation académique (Flutter)"
              description="Application Flutter d’aide à l’orientation académique: parcours guidés, fiches filières, favoris et intégration à l’API NestJS."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
