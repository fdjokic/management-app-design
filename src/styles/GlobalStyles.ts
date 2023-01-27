import styled from 'styled-components'

export const lightTheme = {
    background:'#F4F5F7',
    cardColor:'#FFFFFF',
    statusPurple:'#B06AD1',
    statusBlue:'#4B9AE5',
    statusGreen:'#B06AD1',
    statusYellow:'#FFC236',
    statusRed:'#F47075',
    mainBtnColor:'#5D2BFF',
    cardEffectRed:'#F31848',
    lightBlue:'#F31848',
    headingColor:'#373737',
    completedCard:'#F3FFFC',
   primaryText:'#373737',
    secondaryText:'#373737',
    scrollColor:'#00000050'
}
export const darkTheme = {

    background:'#2C2E38',
    cardColor:'#373A45',
    statusPurple:'#B06AD1',
    statusBlue:'#4B9AE5',
    statusGreen:'#B06AD1',
    statusRed:'#F47075',
    statusYellow:'#FFC236',
    mainBtnColor:'#68FFC7',
    cardEffectRed:'#F31848',
    lightBlue:'#F31848',
    completedCard:'#3A4A44',
   primaryText:'#ffffff',
    secondaryText:'#ffffff',
    scrollColor:'#ffffff50'
}


interface FlexProps {
    between?: boolean
    main?: boolean
    justcenter?: boolean
    padding?: string
    end?: string
    start?: string
    center?: boolean
    column?: boolean
    gap?: string
    relative?: boolean
    m?: string
    mt?: string
    mb?: string
    ml?: string
    mr?: string
    width?: string
    wrap?: boolean
    scroll?: boolean
    position?: string
    pointer?: string
    maxHeight?: string
    minHeight?: string
    top?: string
    height?: string
    overflow?: string
    onClick?: () => any
    mediaQ?: boolean
    fontFamily?:string
    fontSize?:string
    color?:string
  }

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${(props) => props.between && 'justify-content: space-between'};
  ${(props) => props.justcenter && 'justify-content: center'};
  ${(props) => props.end && 'justify-content: end'};
  ${(props) => props.start && 'justify-content: start'};
  ${(props) => props.center && 'align-items:  center'};
  ${(props) => props.top && 'align-items:  flex-start'};
  ${(props) => props.column && 'flex-direction: column'};
  ${(props) => props.gap && `gap:${props.gap}`};
  ${(props) => props.relative && 'position:relative'};
  ${(props) => (props.m ? 'margin:' + props.m : '')};
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  margin-left: ${(props) => props.ml}px;
  margin-right: ${(props) => props.mr}px;
  width: ${(props) => props.width};
  ${(props) => props.position && 'position:' + props.position};
  ${(props) => props.pointer && 'cursor:pointer'};
  ${(props) => props.maxHeight && 'max-height:' + props.maxHeight};
  ${(props) => props.minHeight && 'min-height:' + props.minHeight};
  ${(props) => props.height && 'height:' + props.height};
  ${(props) => props.overflow && 'auto'};
  ${(props) => props.padding && 'padding:' + props.padding};
  font-family:${(props)=>props.fontFamily};
  font-size:${(props)=>props.fontSize};
  color:${(props)=>props.color}
`

export const Divider = styled.div`

background-color: #F31848ed;
height: 100%;
width: 6px;
transform: translate(-50%,-50%);
top: 50%;
left: 0;
position: absolute;
`