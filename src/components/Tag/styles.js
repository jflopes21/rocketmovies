import styled from "styled-components";

export const Container = styled.div`
display: flex;
padding: 8px 16px;
font-size: 1.2rem;
font-family: 'Roboto', serif;
text-align: center;
border-radius: 8px;
background-color: ${({theme}) => theme.COLORS.GRAY_500};
color: ${({theme}) => theme.COLORS.WHITE};

max-width: 200px;

`;