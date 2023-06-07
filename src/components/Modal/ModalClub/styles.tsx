import styled, { css, keyframes } from 'styled-components'
export const Container = styled.div`
${({ theme }) => css`
display: flex;
height: 100%;
width: 100%;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding:${theme.spacings.normal};
overflow-y: auto;
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
width: 9.375rem;
height: 9.375rem;
animation:${spinAnimation} 1s linear infinite;
`
export const Img = styled.img`
display: flex;
width: 9.375rem;
height: 9.375rem;
`
export const Item = styled.div`
${({ theme }) => css`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
width: 12.5rem;
height: 12.5rem;
margin:${theme.spacings.normal};
cursor:pointer;
border: 1px solid ${theme.color.secondaryColor};
border-radius: ${theme.radius.medium};
background-color: ${theme.color.backgroundColor};
`}
`

