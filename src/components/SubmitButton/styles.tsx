import styled, { css } from 'styled-components'
interface ContainerProps {
  enableColor: boolean
}
export const Container = styled.button<ContainerProps>`
${({ theme, enableColor }) => css`
  display: flex;
  all:unset;
  background: ${enableColor ? theme.color.secondaryColor : '#CACCb1'};
  width: 100%;
  border-radius:  5px;
  height: 2rem;
  text-align: center;
  color:${theme.color.backgroundColor};
  `}
`