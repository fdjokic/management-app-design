import styled from 'styled-components'

export const ColumnWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: fit-content;
max-height: 568px;
  width: 280px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    background:${(props)=>props.theme.scrollColor};
  width: 5px;
  border-radius: 10px;
}


/* Track */
::-webkit-scrollbar-track {
  background:${(props)=>props.theme.background};
  width: 5px;

  border-radius: 10px;
}

 ::-webkit-scrollbar-thumb {
  background:${(props)=>props.theme.scrollColor};
  width: 5px;
  border-radius: 10px;
}
 
  

  // scroll styles


`