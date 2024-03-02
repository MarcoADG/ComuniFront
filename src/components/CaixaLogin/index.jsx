import { React, useState, useContext } from "react";
import { CaixaLoginStyle } from "./style";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Botao from "./../Botao/index";
import InputGroup from "react-bootstrap/InputGroup";
import { AuthenticationContext } from "../../services/context/AuthContext";
import { useNavigate } from "react-router";

export default function CaixaLogin() {
  const [modo, setModo] = useState(true);
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthenticationContext);

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const respostaLogin = await login(email, password);
    if (!respostaLogin) {
      return false;
    }
    navigate("/comunidades");
    setValidated(true);
  };

  return (
    <CaixaLoginStyle>
      <div className="caixaLogin">
        <h1 className="h1">{modo ? "Bem vindo" : "Cadastre-se"}</h1>
        <Form noValidate validated={validated} className="formInput">
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="text"
              placeholder="Email@gmail.com"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>Senha</Form.Label>

            <InputGroup className="mb-3">
              <InputGroup.Checkbox
                id="basic-addon2"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Checkbox for following text input"
              />
              <Form.Control
                required
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                aria-label="Senha"
                aria-describedby="basic-addon2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Botao texto={modo ? "Login" : "Cadastrar"} action={handleSubmit} />
        </Form>
      </div>
    </CaixaLoginStyle>
  );
}
