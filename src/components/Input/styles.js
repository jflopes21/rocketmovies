import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  
  > input {
    padding: 19px 24px;
    width: 100%;
    height: 56px;
    border: 0;
    border-radius: 10px;
    background: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  >svg {
    margin-left: 16px;
  }
`;
