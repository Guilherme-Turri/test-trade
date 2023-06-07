import styled, { css } from 'styled-components'
export const Container = styled.div`
${({ theme }) => css`
display:flex;
flex-direction: column;
flex-wrap:wrap;
justify-content:center;
align-items: center;
width:100%;
height:100%;
padding: ${theme.spacings.normal};
margin: ${theme.spacings.normal};;
 & th{
padding:${theme.spacings.normal};;
justify-content:center;
align-items: center;
background-color: white;
}
& td{
  text-align: center;
  padding: ${theme.spacings.normal};;
  background-color: white;
}
& caption{
  font-weight: bold;
  font-size: ${theme.sizes.big};;
}
& table{
margin-top:${theme.spacings.normal};;
 width:100%;
}
`}
`
