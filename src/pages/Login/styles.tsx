import styled, { css } from 'styled-components'
import { Container as HeadingContainer } from '../../components/Heading/styles'

export const Container = styled.section`
${({ theme }) => css`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
width:100%;
`}
`
