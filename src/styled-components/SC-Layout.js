import styled from 'styled-components'

export const GridWrapper = styled.section`
  display: grid;
  justify-content: center;
  gap: 40px;
  align-content: center;
  grid-template-columns: repeat(auto-fit,minmax(450px, 1fr));
  padding: 20px;
  justify-items: center;
`;

export const ColumnWrapper = styled.section`
display: flex;
align-items:  center;
justify-content:  flex-start;
flex-direction: column;
width: 100%;
`;