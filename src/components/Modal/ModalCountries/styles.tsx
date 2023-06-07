import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
${({ theme }) => css`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: ${theme.spacings.normal};
flex-wrap: wrap;
border-radius: ${theme.radius.medium};
overflow-y: auto;
`}
`
export const Item = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
cursor: pointer;
width: 4.688rem;
height: 3.125rem;
`

export const Img = styled.img`
${({ theme }) => css`
width: 1.563rem;
height: 1.563rem;
border-radius: ${theme.radius.total};
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