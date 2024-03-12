import { Accordion } from "react-bootstrap";
import styled from "styled-components";

export const RegrasStyle = styled(Accordion)`
  width: 80%;

  .accordion-button {
    background-color: gray;
    border-color: green;
    border-style: solid;
    border-width: 1px;
    color: #ffffff;
  }

  .accordion-body {
    background-color: gray;
    color: #ffffff;
    border-color: green;
    border-style: solid;
    border-width: 1px;
  }
`;
