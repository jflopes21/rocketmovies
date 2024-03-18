import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 24px 0;
  }

  .title h1 {
    font-size: 3.6rem;
    font-weight: 500;
  }

  .created-info {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .created-by {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .created-by img {
    width: 16px;
    height: 16px;

    border-radius: 35px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .created-by span {
    font-size: 1.6rem;
    font-family: 'Roboto', serif;
  }

  .created-at {
    display: flex;
    align-items: center;
    gap: 8px;

    >svg{
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .created-at span {
    font-size: 1.6rem;
    font-family: 'Roboto', serif;;
  }

  .tags {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 40px;
  }



  > p {
    font-size: 1.6rem;
    text-align: justify;
    margin-top: 40px;
  }
`;
