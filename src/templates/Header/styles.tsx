import styled, { css, keyframes } from 'styled-components'

export const Container = styled.header`
${({ theme }) => css`
display: flex;
justify-content: space-between;
padding: 15px;
align-items: center;
width: 100%;
height: 3rem;
background-color: white;
border-bottom: 2px solid ${theme.color.secondaryColor};
font-weight:bold;
animation: ${slideInAnimation} .3s ;

`}
`
export const Img = styled.header`
width: 35px;
height: 35px;
cursor: pointer;
`
const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;
