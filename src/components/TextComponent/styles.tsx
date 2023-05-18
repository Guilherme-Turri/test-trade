import styled, { css } from 'styled-components'

export const Container = styled.p`
${({ theme }) => css`
color:${theme.color.primaryColor};
`}
`