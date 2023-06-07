import styled, { css } from 'styled-components'
import { Container as HeadingContainer } from '../Heading/styles'

export const Container = styled.section`
${({ theme }) => css`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:100%;
z-index:-999999999;
${HeadingContainer}{
  margin-bottom: ${theme.spacings.normal};
}
`}
`