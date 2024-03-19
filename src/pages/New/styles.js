import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  >main{
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;
  }
`;

export const Form = styled.form`
  /* max-width: 1130px; */
  width: 100%;
  margin: 0px auto;
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;


  .inputs{
    display: flex;
    gap: 40px;
  }

  >header h1 {
    font-size: 3.6rem;
    font-weight: 500;
    margin-top: 24px;
  }

  .markers h2{
    font-size: 20px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_400};
    margin-bottom: 24px;
  }

  .tags{ 
    width: 100%;
    background-color:${({theme}) => theme.COLORS.BACKGROUND_900} ;
    padding: 16px;
    border-radius: 8px;
    align-items:flex-start;
    gap: 24px;

    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }

  .buttons{
    display: flex;
    gap: 40px;
  }


`;