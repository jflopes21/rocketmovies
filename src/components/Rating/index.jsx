import { Container, StyledStar } from "./styles";
import star from "../../assets/star.svg";
import starFilled from "../../assets/star-filled.svg";

export function Rating({ stars }) {
  const Star = ({ filled }) => {
    return (
      <StyledStar
        src={filled ? starFilled : star}
        alt={filled ? "Estrela preenchida" : "Estrela vazia"}
      />
    );
  };

  return (
    <Container>
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={index < stars} />
      ))}
    </Container>
  );
}
