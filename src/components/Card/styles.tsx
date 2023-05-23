import styled, { css } from 'styled-components'
import { Container as TC } from '../TextComponent/styles'

export const Container = styled.div`
${({ theme }) => css`
background: white;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 300px;
width: 200px;
border-radius: 5px;
margin: 15px;
box-shadow: 0 0 5px ${theme.color.secondaryColor};
${TC}{
  font-family: ${theme.fonts.logoFont};
  border-bottom: 1px solid ${theme.color.secondaryColor};
  padding:5px;
}
`}
`
export const Img = styled.div`
${({ theme }) => css`
height: 100px;
width: 100px;
`}
`