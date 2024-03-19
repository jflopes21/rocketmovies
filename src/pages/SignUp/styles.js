import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 0 160px;

  >h1{
    font-size: 4.8rem;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > p{
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }

  >h2{
    font-size: 2.4rem;
    margin: 48px 0;
  }

  .backToLogin {
    display: flex;
    justify-content: center;
    margin-top: 42px;
    width: 100%
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

`;