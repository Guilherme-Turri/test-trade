import styled, { css } from 'styled-components'
import { Container as Link } from '../../components/LinkTo/styles'
import { Container as Heading } from '../../components/Heading/styles'
export const Container = styled.section`
${({ theme }) => css`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
height: 100vh;
width:100%;
padding: ${theme.spacings.normal};
@media (max-width: 650px) {
  justify-content: center;
  align-items:center;
    ${Heading}{
    font-size:${theme.sizes.xbig};
    padding: 30px 0 30px 0;
  }
  }
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
  padding-right: ${theme.spacings.normal};
}
`}
`
