import styled from "styled-components";

export const PaginaReunioesStyle = styled.div`
  background-color: var(--cor-fundo);
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  flex-direction: column;

  .row2 {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .containerScroll {
    max-height: 100vh;
    overflow-y: auto;
    max-width: 90vw;

    scrollbar-width: thin;
    scrollbar-color: var(--cor-fonte) var(--cor-fundo);
  }

  .colComu {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;
