import styled from 'styled-components';
import responsiveBreakPoints from "../../../../../themes/responsiveBreakPoints/style";

export const Container = styled.div`
  height: 100%;
  min-width: 60px;
  background-color: #1c7cd5;
  width: 250px;
  padding-top: 10px;

  @media screen and ${responsiveBreakPoints.mobile_maxWidth} {
    width: 100px;
  }
`;

export const TitleWrapper = styled.div`
  font-size: 22px;
  color: #fff;
  padding-left: 18px;

  @media screen and ${responsiveBreakPoints.mobile_maxWidth} {
    font-size: 16px;
  }
`;
