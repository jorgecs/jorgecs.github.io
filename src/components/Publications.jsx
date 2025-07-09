import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { publicationsData } from "../config";
import Title from "./Title";
import { Element } from "react-scroll";
import styled from "styled-components"; 

const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height) - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Publications = () => {
    return (
      <Element name="Publications">
        <StyledSection> {/* Wrap with StyledSection */}
          <Container fluid className="py-5">
            <Container>
              <Row>
                <Col>
                  <div className="text-center">
                    <Title size="h2" text="Publications" />
                  </div>
                  {/* Add ORCID and Google Scholar links */}
                  <div className="text-center mb-4">
                    <a href="https://orcid.org/0009-0003-9166-6827" target="_blank" rel="noopener noreferrer" className="text-decoration-none me-3">
                      <Icon icon="simple-icons:orcid" className="fs-4 text-success" />
                      <span className="ms-1">ORCID</span>
                    </a>
                    <a href="https://scholar.google.es/citations?user=bA3ApksAAAAJ&hl=es&oi=ao" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <Icon icon="simple-icons:googlescholar" className="fs-4 text-primary" />
                      <span className="ms-1">Google Scholar</span>
                    </a>
                  </div>
                </Col>
              </Row>
              <Row>
                {publicationsData.map((pub) => (
                  <Col key={pub.id} lg={6} className="mb-4">
                    <Card className="h-100">
                      <Card.Body>
                        <Card.Title className="h5">{pub.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {pub.date}
                        </Card.Subtitle>
                        <Card.Text>
                          <em>{pub.journal || pub.conference}</em>
                        </Card.Text>
                        {pub.abstract && (
                          <Card.Text className="small">{pub.abstract}</Card.Text>
                        )}
                        {pub.link && (
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                            <Icon icon="mdi:external-link" className="me-1" />
                            View Publication
                          </a>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Container>
        </StyledSection>
      </Element>
    );
};

export default Publications;