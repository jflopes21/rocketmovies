import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.GRAY_500};

  height: 56px;
  width: 100%;
  border: 0;
  padding: 0 16px;
  margin-top: 24px;

  border-radius: 10px;

  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
  }
`;