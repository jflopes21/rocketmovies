import { Container } from "./styles";

export function Button({title, loading = false, icon: Icon, isAlternative, ...rest}){

  return(
    <Container type="button" disabled={loading} {...rest} $alternative={isAlternative}>
      {Icon && <Icon size={20} />}
      {loading ? "Carregando" : title}
    </Container>
  );
}