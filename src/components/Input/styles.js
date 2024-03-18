import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* margin-bottom: 8px; */
  
  > input {
    padding: 19px 24px;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: flex-start;
    border: 0;
    border-radius: 10px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
