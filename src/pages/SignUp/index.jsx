import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input type="text" icon={FiUser} placeholder="Nome" />
        <Input type="text" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha" />
        <Button title="Cadastrar" />
        <div className="backToLogin">
          <Link to="/">
            <ButtonText title="Voltar para o login" icon={FiArrowLeft} />
          </Link>
        </div>
      </Form>

      <Background />
    </Container>
  );
}
