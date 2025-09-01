import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { certificatesData } from "../config";
import Title from "./Title";
import { Element } from "react-scroll";
import styled from "styled-components";

const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height) - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Certificates = () => {
  return (
    <Element name="Certificates">
      <StyledSection>
        <Container fluid className="py-5">
          <Container>
            <Row>
              <Col>
                <div className="text-center">
                  <Title size="h2" text="Certificates" />
                </div>
              </Col>
            </Row>
            <Row>
              {certificatesData.map((cert) => (
                <Col key={cert.id} lg={6} className="mb-4">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="h5">{cert.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {cert.issuer}
                      </Card.Subtitle>
                      {cert.date && (
                        <Card.Text className="small text-muted">
                          <Icon icon="mdi:calendar" className="me-1" />
                          {cert.date}
                        </Card.Text>
                      )}
                      {cert.expiryDate && (
                        <Card.Text className="small text-muted">
                          <Icon icon="mdi:calendar-clock" className="me-1" />
                          Expires: {cert.expiryDate}
                        </Card.Text>
                      )}
                      {cert.description && (
                        <Card.Text className="small">{cert.description}</Card.Text>
                      )}
                      <div className="d-flex gap-2 flex-wrap">
                        {cert.credentialUrl && (
                          <a 
                            href={cert.credentialUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-outline-primary btn-sm"
                          >
                            <Icon icon="mdi:certificate" className="me-1" />
                            View Certificate
                          </a>
                        )}
                        {cert.verificationUrl && (
                          <a 
                            href={cert.verificationUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-outline-success btn-sm"
                          >
                            <Icon icon="mdi:shield-check" className="me-1" />
                            Verify
                          </a>
                        )}
                      </div>
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

export default Certificates;
