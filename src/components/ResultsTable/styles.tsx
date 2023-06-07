import styled, { css } from 'styled-components'
export const Container = styled.div`
${({ theme }) => css`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items: center;
width:25rem;
height:100%;
padding: ${theme.spacings.normal};
margin: ${theme.spacings.normal};
 & th{
padding:${theme.spacings.normal};
justify-content:center;
align-items: center;
background-color: white;
}
& td{
  text-align: center;
  padding: ${theme.spacings.normal};
  background-color: white;
}
& caption{
  font-weight: bold;
  font-size: ${theme.sizes.big};
}
`}
`
