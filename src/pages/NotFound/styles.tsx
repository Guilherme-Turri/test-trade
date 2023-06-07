import styled, { css } from 'styled-components'

export const Container = styled.section`
${({ theme }) => css`
display:flex;
flex-direction: column;
align-items: center;

height:100vh;
a{
  margin-top: ${theme.spacings.normal};
  text-decoration: none;
  color:${theme.color.error}
}
`}
`
export const Content = styled.div`
display:flex;
flex-direction:column;
flex-wrap: wrap;
align-items: center;
width: 100%;
z-index:99999999;

`
export const Img = styled.div`
height: 15rem;
width: 15rem;
`