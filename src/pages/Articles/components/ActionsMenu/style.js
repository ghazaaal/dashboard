import styled from "styled-components";
import responsiveBreakPoints from "../../../../themes/responsiveBreakPoints/style";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 65px;
  height: 40px;
  background-color: #5bc0de;
  border: solid 1px #5bc0de;
  border-radius: 5px;
  min-width: 65px;
`;

export const MenuIconWrapper = styled.div`
  //margin: -15px 8px 0 20px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-out;
  transform: ${(props) => (props.isMenuOpen ? 'rotate(-180deg)' : '')};
  padding-right: 10px;
  padding-left: 10px;

  > svg {
    width: 10px;
    height: 15px;
  }
`;

export const Menu = styled.div`
  position: absolute;
  width: 175px;
  border-radius: 4px;
  border: solid 1px #ddd;
  background-color: #fff;
  display: ${(props) => (props.isMenuOpen ? 'block' : 'none')};
  top: 40px;
  right: 8px;
  z-index: 1000;
  @media screen and ${responsiveBreakPoints.mobile_maxWidth} {
    width: 150px;
    display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
    right: 30px;
    top: 0;
  }

  > div {
    border-bottom: solid 1px #ddd;;
  }

  > div:last-child {
    border-bottom: none;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items:center ;
  justify-content: center;
  width: 100%;
  height: 42px;
  background-color: transparent;
  cursor: pointer;
  color: #373a3c;
  font-size: 16px;
  @media screen and ${responsiveBreakPoints.mobile_maxWidth} {
    height: 35px;
  }
`;

export const GhostArea = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;