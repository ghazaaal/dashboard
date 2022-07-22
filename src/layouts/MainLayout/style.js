import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  
  //>div:nth-child(2) {
  //  margin-top: 25px;
  //}
`;

export const Side = styled.div`
  height: 100%;
  width: 250px;
  display: flex;
  justify-content: center;
`;