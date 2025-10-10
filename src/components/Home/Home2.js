import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import my4x4 from "../../Assets/4x4.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description" style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple"> ME PRÉSENTER</span>
            </h1>
            <p className="home-about-body" style={{ display: "inline-block", textAlign: "center" }}>
              Je suis <b className="purple">développeur full‑stack</b> multiplateforme, passionné par la création
              d'interfaces <b className="purple">modernes et fonctionnelles</b>.
              <br />
              <br />Compétent en langages comme
              <i>
                <b className="purple"> JavaScript, Python, Java et Dart</b>
              </i>
              , j'interviens sur des projets <b className="purple">Web</b> et <b className="purple">Mobile</b>.
              <br />
              <br />Côté frameworks, j'apprécie particulièrement
              <i>
                <b className="purple"> React</b> pour le front‑end et
                <b className="purple"> Node.js/Django</b> pour le back‑end, ainsi que
                <b className="purple"> Flutter</b> pour le mobile.
              </i>
              <br />
              <br />Mon objectif: concevoir et développer des produits utiles et
              de qualité, de l'idée jusqu'au déploiement.
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={my4x4} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI</h1>
            <p>
              N'hésitez pas à <span className="purple">me contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:williams25prince@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
