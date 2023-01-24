import styled from 'styled-components'

interface ICard {
    height?:string
}
export const CardStyled = styled.div<ICard>`
max-width: 260px;
display: flex;
min-height: 60px;
flex-direction: column;
justify-content: space-between;
max-height: 114px;
background-color: ${(props)=>props.theme.cardColor};


b{
  height: 24px;
  width: 236px;
  margin: 0 12px 12px 12px;
   font-family: "SF Pro Display";
  font-size: 13px;
  font-weight: bold;
}

p{
    max-width: 236px;
    word-break: break-all;
margin: 12px 12px 0 12px;
  font-family: "SF Pro Display";
  font-size: 14px;
  letter-spacing: 0.3px;
  background-color: ${(props)=>props.theme.cardColor};
}
  border-radius: 6px;
  box-shadow: 0 2px 7px -2px rgba(0,0,0,0.2);

`

interface IStatusBtn {
  background:string;
}
export const StatusBtn = styled.div<IStatusBtn>`
width: 8px;
height: 8px;
cursor: pointer;
border-radius:50%;
background-color: ${({background})=>background};

`