import { React } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { PageContainerStyle } from "./style";

function PageContainer(props) {
  return (
    <PageContainerStyle>
      <Row role="main">{props.children}</Row>
    </PageContainerStyle>
  );
}

export default PageContainer;
