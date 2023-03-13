import styled from 'styled-components'

export const VideoContainer = styled.section`
  position:relative; 
  padding-bottom:56.25%; 
  padding-top:30px; 
  height:0; 
  width: 100%;
  overflow:hidden; 
  margin-bottom: 20px;
  
  iframe, object, embed { 
    position:absolute; 
    top:0; 
    left:0; 
    width:100%; 
    height:100%; 
  }
`;