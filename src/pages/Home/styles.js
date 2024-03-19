import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px 80px;
  grid-template-areas: 
    "header"
    "title"
    "content"
  ;

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
    margin-top: 25px;
  }
`;


export const Title = styled.div`
  grid-area: title;
  width: 100%;
  margin-top: 30px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 125px;
  justify-content: space-between;

  >h1{
    font-weight: 400;
    font-size: 3.2rem;
  }

  > .addButton{
    width: 210px;
  }
`;

export const Content = styled.div`
  padding: 0 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;