import styled from 'styled-components'
import { Container as HC } from '../../components/Heading/styles'
export const Container = styled.section`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${HC}{
  margin-top: 15px;
}
`