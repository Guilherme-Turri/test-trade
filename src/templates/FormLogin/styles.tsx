import styled, { css, keyframes } from 'styled-components'

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const Container = styled.form`
${({ theme }) => css`
background-color: white;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
border-radius: ${theme.radius.small};
padding: ${theme.spacings.normal};
display: flex;
justify-content: center;
flex-direction: column;
min-width: 31.25rem;
height: 15.625rem;
justify-content: space-evenly;
margin: ${theme.spacings.normal};
@media (max-width: 650px) {
 min-width:80%;
}
`}
`
export const Loading = styled.div`
height: 2.188rem;
width: 2.188rem;
animation:${spinAnimation} 1s linear infinite;
`
