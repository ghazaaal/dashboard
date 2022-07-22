import styled, {css} from 'styled-components';
import responsiveBreakPoints from "../../../../../themes/responsiveBreakPoints/style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;


  ${({selectedTab}) =>
          selectedTab &&
          css`
            .tab:nth-child(${selectedTab}) {
              background-color: rgba(255, 255, 255, 0.15);
            }
          `}: null;

`;

export const Tab = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 43px;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  padding-left: 35px;

  :hover {
    div:nth-child(2) {
      visibility: visible;
      opacity: 1;
    }
  }

  @media screen and ${responsiveBreakPoints.mobile_maxWidth} {
    font-size: 15px;
    padding-left: 10px;
  }
`;


