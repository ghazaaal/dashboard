import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  min-height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  background-color: #373a3c;
`;

export const WelcomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-left: 20px;
  align-items: center;
`;

export const WelcomeFirstSection = styled.div`
  height: 100%;
  display: flex;
  font-size: 22px;
  color: #ffffff;
  align-items: center;
  margin-right: 20px;


`;

export const WelcomeSecondSection = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  font-size: 16px;
  color: #fff;

`;


export const LogoutButton = styled.div`
  width: 87px;
  height: 40px;
  display: flex;
  border-radius: 4px;
  border: solid 1px #5bc0de;
  margin-right: 30px;
  color: #5bc0de;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

