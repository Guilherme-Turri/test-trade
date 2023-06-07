import styled, { css } from 'styled-components'

export const Container = styled.section`
${({ theme }) => css`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
height: 100%;
width:100%;
padding: ${theme.spacings.normal};
`}
`

export const Img = styled.img`
${({ theme }) => css`
display: flex;
justify-content: center;
align-items: center;
width: 6.25rem;
height: 6.25rem;
border:2px solid ${theme.color.secondaryColor};
border-radius: ${theme.radius.total};
padding: ${theme.spacings.xsmall};
`}
`