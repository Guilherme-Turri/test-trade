import styled, { css } from 'styled-components'

interface img {
  readyToChose: boolean
}

export const Img = styled.div<img>`
${({ theme, readyToChose }) => css`
color: ${readyToChose ? theme.color.secondaryColor : 'grey'};
width: 100%;
height: 100%;
`}
`
