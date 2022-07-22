import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #ddd;
  padding: 18px 16px 16px;

  > svg {
    width: 16px;
    height: 16px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #373a3c;
`;

export const MainWrapper = styled.div`
  height: 80px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 22px;
  border-bottom: solid 1px #ddd;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 0;
  padding: 16px 16px 15px;

`;

export const SaveButton = styled.div`
  display: flex;
  width: 79px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: solid 1px #ddd;
  background-color: #d9534f;
`;

export const CancelButton = styled.button`
  display: flex;
  width: 72px;
  height: 40px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: solid 1px #ddd;
`;
