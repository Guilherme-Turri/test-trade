import styled, { css, keyframes } from 'styled-components'

export const Container = styled.section`
${({ theme }) => css`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
padding: ${theme.spacings.normal};
justify-content: center;
align-items: center;
`}
`

export const Heading = styled.div`
${({ theme }) => css`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: space-evenly;
align-items: center;
padding: ${theme.spacings.normal};
margin-bottom: ${theme.spacings.normal};
    @media (max-width: 650px) {
      display: none;
    }
`}
`
export const Logo = styled.img`
width:9.375rem;
height: 9.375rem;
`
export const Statistics = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: space-evenly;
align-items: center;
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