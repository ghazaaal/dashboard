import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-right: 35px;
  padding-left: 35px;
`;

export const TitleWrapper = styled.div`
  font-size: 40px;
  color: black;
  margin-bottom: 25px;
`;

export const Desk = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const Input = styled.div`
  width: 100%;
  background-color: transparent;
  margin-bottom: 20px;
  display: flex;
  height: ${(props) => (props.isBody === 'body' ? '207px' : 'auto')};
`;

export const CheckBoxWrapper = styled.div`
  display: flex;

  > label {
    padding-left: 8px;
  }
`;

export const CheckBoxInputWrapper = styled.div`
  width: 100%;
`

export const TagsListWrapper = styled.div`
 width: 100%;
  min-height: 220px;
  max-height: 355px;
  border-radius: 4px;
  border: solid 1px #ddd;
  background-color: #fff;
  padding-left: 17px;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-top: 14px;
  overflow-y: auto;
  color: #373a3c;
  font-size: 16px;
`

export const SubmitButton = styled.button`
  width: 99px;
  height: 35px;
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  border: solid 1px #1c7cd5;
  background-color: #1c7cd5;
  cursor: pointer;
  margin-top: 35px;
`