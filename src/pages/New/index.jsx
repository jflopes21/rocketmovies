import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi";
import { Textarea } from "../../components/Textarea";
import { Noteitem } from "../../components/Noteitem";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/">
              <ButtonText title="Voltar" icon={FiArrowLeft} />
            </Link>
            <h1>Novo filme</h1>
          </header>
          <div className="inputs">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações" />
          <div className="markers">
            <h2>Marcadores</h2>
            <div className="tags">
              <Noteitem value="React" />
              <Noteitem value="" isNew placeholder="Novo marcador" />
            </div>
          </div>
          <div className="buttons">
            <Button title="Excluir filme" isAlternative />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
