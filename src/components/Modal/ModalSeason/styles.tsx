import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
${({ theme }) => css`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding:${theme.spacings.normal};
`}
`
export const Item = styled.div`
${({ theme }) => css`
display: flex;
align-items: center;
justify-content: center;
border-bottom: 2px solid ${theme.color.secondaryColor};
display: flex;
width: 6.25rem;
height: 3.438rem;
margin: ${theme.spacings.normal};
cursor: pointer;
`}
`
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Load = styled.div`
${({ theme }) => css`
width: 9.375rem;
height: 9.375rem;
animation:${spinAnimation} 1s linear infinite;
`}
`