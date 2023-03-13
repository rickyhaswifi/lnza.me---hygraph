import styled from 'styled-components'

export const SocialSection = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
padding: 15px;
color: white;
margin: 0;
font-size: 1.5rem;

  &.gr-facebook {
    background-image: linear-gradient(45deg, #1B65EB,#1BDBF8 );
  }

  &.gr-spotify {
    background-image: linear-gradient(45deg, #1DD760,#1DD781 );
  }

  &.gr-youtube {
    background-image: linear-gradient(45deg, #FF0000,#FF0305 );
  }

  &.gr-instagram {
    background-image: linear-gradient(45deg, #FCB845, #FD2246 ,#5538E8 );
  }

  &.gr-twitter {
    background-image: linear-gradient(45deg, #1DA1F2,#34AAF2 );
  }

  &.gr-download {
    background-color: #fcfcfc;
    justify-content:center;
    color: gold;
    border-radius: 0 0 0 25px;
    i {
      margin-right: 8px;
    }
    a {
      color: #fcfcfc;
      text-decoration: none;
      background-color: #A90100;
      padding: 12px 16px;
      border-radius: 5px 0 5px 0;
    }
  }

`; 