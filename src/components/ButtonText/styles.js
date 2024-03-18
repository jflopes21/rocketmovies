import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  border: none;
  background: none;
  font-size: 1.6rem;

  color: ${({ theme }) => theme.COLORS.PINK};
`;
