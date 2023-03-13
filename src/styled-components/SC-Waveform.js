import styled from 'styled-components'

export const WaveformContianer = styled.div`
  display: flex;  
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  height: 100px;  width: 100%;
  background: transparent;
  flex-direction: row-reverse;
  background-color: #181818;
  border-radius: 0 25px 0 25px;
  padding: 20px 0px;

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    padding: 10px;
    margin: 0 8px 8px 0px;
  }
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  background: transparent;
  border-radius: 5px 0 5px 0;
  border: 1px solid #EFEFEF;
  color: white;
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 200ms ease;
  &:hover {
    background: #EEE8C3;
    color: #1C1C1C;
    border: 1px solid #1C1C1C;
  }
`;