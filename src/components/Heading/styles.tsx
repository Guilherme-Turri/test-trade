import styled, { css } from 'styled-components'
import { HeadingProps } from './index'

export const Container = styled.h1<HeadingProps>`
  ${({ theme, uppercase, big }) => css`
      text-transform: ${uppercase ? 'uppercase' : 'none'};
      color: ${theme.color.secondaryColor};
      font-size: ${big ? '60px' : '20px'};
      font-family: ${theme.fonts.logoFont};
      `}
  `