import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  height: 105px;
  
  padding: 24px 123px;
  gap: 64px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
  }
`;

export const Profile = styled.a`
  display: flex;
  gap: 9px;
  align-items: center;
  height: 68px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    > strong {
      font-size: 1.4rem;
      line-height: 1.8rem;
      white-space: nowrap;
    }

    > a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > img {
    width: 64px;
    height: 64px;

    border-radius: 35px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
