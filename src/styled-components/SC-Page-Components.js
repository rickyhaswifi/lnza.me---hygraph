import styled from 'styled-components'

export const HeroSection  = styled.section`
max-height: 80vh;
min-height: 60vh;
width: 100%;
h1 {
  color: white;
  font-size: 4rem;
  margin-bottom:20px;
  span {
    background: linear-gradient(to top, rgba(255, 215, 0, 0.5) 50%, transparent 50%);
  }
}
p {
  color: #EEE9C7;
  margin-bottom:20px;
}
button, a {
  font-family: 'Fredoka One', sans-serif;
  padding: 8px 16px;
  background-color: maroon;
  border:none;
  color: #EEE9C7;
  font-size: 16px;
  border-radius: 5px 0 5px 0;
}
`;

export const Wrapper = styled.section`
max-width: 1480px;
margin: 0 auto;
`;
