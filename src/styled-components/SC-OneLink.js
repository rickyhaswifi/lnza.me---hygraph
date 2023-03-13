import styled from 'styled-components'

export const LinkCard = styled.section`
  background-color: white;
  border-radius: 0 25px 0 25px;
  width: 325px;
  height: min-content;
  position: sticky;

  h2 {
    text-align: center;
    padding: 20px 0 8px 0;
  }
  h3 {
    text-align: center;
    padding: 0 0 8px 0;
  }
  
  img {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const SubCTA = styled.p`
  background-color:white;
  text-align: center;
  padding: .5em 0 0 0;
`;

export const MusicRow = styled.section`
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 20px;
  img {
    width: 140px;
  }
  /* button {
    font-family: 'Fredoka One', sans-serif;
    font-size: .8rem;
    color: #EEE9C3;
    background-color: #1c1c1c;
    border-radius: 0 10px 0 10px;
    padding: .375rem .75rem;
    border: none;
    transition: 200ms all;
    position: relative;
    &:after, &:before { 
      content:'';
      background-color: transparent;
      transform: scale(0);
      transition: 200ms;
    }

    &:hover{
      background-color: #A80100;
    }
    &:focus-visible {
      outline: none;
      background-color: #A80100;
      &:after, &:before {
        content:'';
        transform: scale(1);
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: #A80100;
        position: absolute;
      }
      &:after {
        left: -15px;
        top: 10px;
      }
      &:before {
        right: -15px;
        top: 10px;
      }
    }
  } */
`;

export const MusicLink = styled.a`
  font-family: 'Fredoka One', sans-serif;
  font-size: .8rem;
  color: #EEE9C3;
  background-color: #1c1c1c;
  border-radius: 0 10px 0 10px;
  padding: .375rem .75rem;
  border: none;
  transition: 200ms all;
  position: relative;
  text-decoration: none;
  margin: 0;
  min-width: 80px;
  text-align: center;
    &:after, &:before { 
      content:'';
      background-color: transparent;
      transform: scale(0);
      transition: 200ms;
    }

    &:hover {
      background-color: #A80100;
    }
    &:focus-visible {
      outline: none;
      background-color: #A80100;
      &:after, &:before {
        content:'';
        transform: scale(1);
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: #A80100;
        position: absolute;
      }
      &:after {
        left: -15px;
        top: 10px;
      }
      &:before {
        right: -15px;
        top: 10px;
      }
    }
`