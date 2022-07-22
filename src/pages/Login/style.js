import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Desk = styled.div`
  width: 450px;;
  position: relative;
  background-color: #eceeef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  font-size: 47px;
  color: #707070;
  margin-bottom: 49px;
`;

export const Input = styled.div`
  width: 410px;
  background-color: transparent;
  margin-bottom: ${(props) => (props.error ? 'auto' : '25px')};
`;

export const SubmitButton = styled.button`
  color: #fff;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  border: solid 1px #1c7cd5;
  background-color: #1c7cd5;
  width: 410px;
  height: 45px;
  font-size: 16px;
  margin-top: 10px;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  background-color: transparent;
  width: 90%;
  height: 40px;
  align-items: center;
`;

export const RegisterTextWrapper = styled.div`
  color: #373a3c;
  font-size: 16px;
`;

export const RegisterButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: #373a3c;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const BackButtonSvgWrapper = styled.div`
  display: none;


`;
