import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  border: none;
  resize: none;
  padding: 16px;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.WHITE};
`;