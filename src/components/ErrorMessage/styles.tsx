import styled, { css } from 'styled-components'

export const Container = styled.p`
${({ theme }) => css`
color: ${theme.color.error};
font-size: 12px;
`}
`