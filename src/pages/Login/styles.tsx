import styled, { css } from 'styled-components'

export const Container = styled.section`
${({ theme }) => css`
display: flex;
flex-direction: column;
height: 100vh;
justify-content:center;
align-items: center;
color:${theme.color.prymaryColor};
width:100%;
`}
`
