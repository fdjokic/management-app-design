import styled from 'styled-components'

interface ICard {
    height:string
}
export const CardStyled = styled.div<ICard>`
max-width: 260px;
display: flex;
flex-direction: column;
justify-content: space-around;

b{
  height: 24px;
  width: 236px;
  padding: 0 12px 12px 12px;
   font-family: "SF Pro Display";
  font-size: 13px;
  font-weight: bold;
}

p{
    max-width: 236px;
    word-break: break-all;
padding: 0 12px 0 12px;
  font-family: "SF Pro Display";
  font-size: 14px;
  letter-spacing: 0.3px;
}
height: ${(props)=>props.height };
  border-radius: 6px;
  background-color: ${(props)=>props.theme.pureWhite};
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