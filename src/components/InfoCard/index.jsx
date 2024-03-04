import React from "react";
import { InfoCardStyle } from "./style";
import { Card, Col, Row } from "react-bootstrap";

export default function InforCard({ title, description }) {
  const limitText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  return (
    <InfoCardStyle>
      <Row>
        <Col className="colCard">
          <Card.Img
            className="cardImg"
            src="https://www.maxpetfood.com.br/wp-content/uploads/2023/01/image-34.png"
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {limitText(description, window.innerWidth <= 600 ? 50 : Infinity)}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </InfoCardStyle>
  );
}
