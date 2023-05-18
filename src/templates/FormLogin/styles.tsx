import styled, { css } from 'styled-components'

export const Container = styled.form`
${({ theme }) => css`
background-color: white;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
padding: 15px;
display: flex;
justify-content: center;
flex-direction: column;
min-width: 500px;
height: 250px;
justify-content: space-evenly;
margin-bottom: 15px;
`}
`