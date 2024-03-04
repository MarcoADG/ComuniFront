import styled from "styled-components";

export const PaginaComunidadeStyle = styled.div`
  background-color: var(--cor-fundo);
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;

  .row2 {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .containerScroll {
    max-height: 100vh;
    overflow-y: auto;
    max-width: 80vw;

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
