import styled, { css } from 'styled-components'
import wave from '../../UI/assets/wave.svg'

export const Footer = styled.footer`
${({ theme }) => css`
  color:${theme.color.backgroundColor};
  font-weight: bold;
  padding: ${theme.spacings.small};
  display: flex;
  justify-content: center;
  align-items: end;
  display: flex;
  position: fixed;
  bottom: 0; 
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  width:100%;
  height: 20rem;
  z-index: -10000;
`}
`