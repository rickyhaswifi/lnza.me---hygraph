import styled from 'styled-components';

export const BioTitle = styled.h1`
color: white;
font-size: 2rem;
text-align: center;
`;

export const Bio = styled.section`
font-family: 'Open Sans', sans-serif;
color: white;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
margin-bottom: 20px;
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;  
overflow: hidden;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
transition: all 200ms ease; 

a {
  color: gold;
  text-decoration: none;
}

strong {background: linear-gradient(to bottom, #1c1c1c 50%, rgba(169, 1, 0, 0.5) 50%)}  

&.textExpand {
  transition: all 200ms ease; 
  overflow: unset;
  -webkit-line-clamp: unset;
}

`;

export const BioExpandToggle = styled.button`
font-family: 'Fredoka One', sans-serif;
padding: 10px;
border: transparent;
color: #EFE9C3;
background-color: #641714;
margin-bottom: 20px;
font-size: 10px;
letter-spacing: 1px;
text-transform: uppercase;
border-radius: 5px 0 5px 0;
cursor: pointer;
transition: all 200ms ease;
 &:hover {
  color: #EFE9C3;
  background-color: #C70100;
 }
`;

export const BookingCard = styled.section`
margin: 20px auto;
text-align: center;
color: white;
`;