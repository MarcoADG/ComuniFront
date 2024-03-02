import styled from "styled-components";

export const CaixaLoginStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: var(--cor-fundo);
  height: 100vh;

  .caixaLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 31.25rem;
    width: 40.625rem;
    color: var(--cor-fonte);
    background-color: var(--primario);
  }

  .h1 {
    margin-bottom: 3.5rem;
  }

  .formInput {
    width: 23.75rem;
  }
`;
