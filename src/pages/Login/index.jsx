import React from "react";
import { PaginaInicialStyle } from "./style";
import { Col, Row } from "react-bootstrap";
import CaixaLogin from "../../components/CaixaLogin";

export default function Login() {
  return (
    <PaginaInicialStyle>
      <Row>
        <Col xs={1} sm={3} md={7} className="loginCol1"></Col>
        <Col xs={11} sm={9} md={5} className="loginCol2">
          <CaixaLogin />
        </Col>
      </Row>
    </PaginaInicialStyle>
  );
}
