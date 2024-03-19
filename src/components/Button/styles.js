import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme, $alternative }) =>
    $alternative ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
  color: ${({ theme, $alternative }) =>
    $alternative ? theme.COLORS.PINK : theme.COLORS.GRAY_500};

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
