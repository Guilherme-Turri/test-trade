import styled, { css } from 'styled-components'
import { Container as TC } from '../TextComponent/styles'

interface availableProps {
  available: boolean
}

export const Container = styled.div<availableProps>`
${({ theme, available }) => css`
background: white;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 15.625rem;
width: 15.625rem;
border-radius: 5px;
margin: ${theme.spacings.normal};
box-shadow: ${available ? '0 0 5px ' + theme.color.secondaryColor : 'none'};
cursor: ${available ? 'pointer' : ''};

${TC}{
  color: ${available ? '' : 'grey'};
  font-family: ${theme.fonts.logoFont};
  border-bottom: ${available ? '1px solid ' + theme.color.secondaryColor : 'none'};
  padding: ${theme.spacings.xsmall};;
}
`}
`
export const Img = styled.div`
${({ theme }) => css`
height: 6.25rem;
width: 6.25rem;
`}
`