import styled, { css, keyframes } from 'styled-components'

export const Container = styled.header`
${({ theme }) => css`
display: flex;
justify-content: space-between;
padding: ${theme.spacings.normal};
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
width: 2.188rem;
height: 2.188rem;
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
