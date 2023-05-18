import styled, { css } from 'styled-components'
export const Container = styled.section`
${({ theme }) => css`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 100vh;
width: 100%;
a{
  color:white;
  text-decoration: none;
}
`}
`
export const Content = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
align-items: center;
height: 350px;
width: 350px;

`