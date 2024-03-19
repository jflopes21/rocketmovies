import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 230px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border: none;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  .rating {
    margin-top: -12px;
  }

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    width: 100%;
    height: 50px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    text-overflow: ellipsis;
    overflow: hidden;

    white-space: nowrap;
    text-align: justify;

    display: -webkit-box;
    -webkit-line-clamp: 2; /* Número máximo de linhas para exibir */
    -webkit-box-orient: vertical; /* Orientação vertical para o layout flexível */

  }


  >footer {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 32px;
  }
`;
