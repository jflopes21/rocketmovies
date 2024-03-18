import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input type="text" placeholder="Pesquisar pelo título"/>
      <Profile>
        <div>
          <strong>João Francisco</strong>
          <a>sair</a>
        </div>
        <img src="https://github.com/jflopes21.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
