import styled, { css } from 'styled-components'
import { Container as Link } from '../../components/LinkTo/styles'
export const Container = styled.section`
${({ theme }) => css`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
height: 100vh;
width:100%;
`}
`
export const Info = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
${({ theme }) => css`
${Link}{
  align-self: end;
  padding-right: 1rem;
}
`}
`
