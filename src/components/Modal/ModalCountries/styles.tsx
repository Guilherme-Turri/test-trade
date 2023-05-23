import styled from 'styled-components'

export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
flex-wrap: wrap;
border-radius: 25px;
overflow-y: auto;

`
export const Item = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
cursor: pointer;
width: 75px;
height: 50px;
`

export const Img = styled.img`
width: 25px;
height: 25px;
border-radius: 50%;
`