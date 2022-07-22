import styled, {css} from 'styled-components';

const height = '34px';
const borderDefaultColor_labelDefaultColor = '#373a3c';
const inputColor_borderHoverColor_autofillTextColor = '#7e99b5';
const errorColor = '#cb2e25';

export const Container = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Border = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 4px;
  border: solid 1px #ddd;
  ${({error}) =>
          error &&
          css`
            border-color: ${errorColor};
          `}
`;

export const Input = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: ${height};
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: transparent;
  color: ${inputColor_borderHoverColor_autofillTextColor};
  padding-left: 15px;
  padding-right: 15px;;
  height: ${(props) => (props.isBody === 'body' ? '207px' : height)};
  padding-top: 10px;
  word-wrap: break-word;
  resize: none;
`;

export const Label = styled.span`
  line-height: 0.9;
  display: flex;
  padding-bottom: 9px;
  color: ${borderDefaultColor_labelDefaultColor};

  ${({error}) =>
          error &&
          css`
            color: ${errorColor};
          `}
`;

export const Error = styled.p`
  color: ${errorColor};
  display: none;
  ${({error}) =>
          error &&
          css`
            display: flex;
          `}

`;

