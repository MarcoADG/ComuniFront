import styled from "styled-components";

export const PaginaReuniaoStyle = styled.div`
  background-color: var(--cor-fundo);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  max-height: 100vh;
  flex-direction: row;
  color: white;
  padding-top: 100px;

  .infoReuniao {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cardImg {
    width: 100%;
  }

  .conteudoReuniao {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
  }

  .video {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
