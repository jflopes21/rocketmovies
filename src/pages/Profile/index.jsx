import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </a>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/jflopes21.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input type="text" placeholder="Nome" icon={FiUser}/>
        <Input type="text" placeholder="E-mail" icon={FiMail}/>
        <Input type="password" placeholder="Senha atual" icon={FiLock}/>
        <Input type="password" placeholder="Nova senha" icon={FiLock}/>

        <Button title="Salvar"/>
      </Form>
    </Container>
  );
}
