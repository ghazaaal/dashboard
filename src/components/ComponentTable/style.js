import styled from 'styled-components';
import responsiveBreakPoints from '../../themes/responsiveBreakPoints/style';

export const Table = styled.table`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  table-layout: fixed;


  @media screen and ${responsiveBreakPoints.laptop_maxWidth} {
    display: block;
    overflow-x: scroll;
  }


  > tbody {
    max-width: inherit;

    > tr {
      > th {
        text-align: left;
        padding-left: 20px;
        @media screen and ${responsiveBreakPoints.laptop_maxWidth} {
          padding-left: 10px;
        }

      }

      > th:nth-child(1) {
        width: 40px;
      }

      > th:last-child {
        text-align: center;
      }

      > th:nth-child(4) {
        width: 180px;
      }

      > th:nth-child(5) {
        width: 300px;
      }

      > th:nth-child(6) {
        width: 220px;
      }

      > td:last-child {
        width: 200px;
      }


    }


    > tr {
      > td {
        text-align: left;
        padding-left: 20px;
        word-wrap: break-word;
        word-break: break-all;

        @media screen and ${responsiveBreakPoints.laptop_maxWidth} {
          padding-left: 10px;
          word-wrap: normal;
          word-break: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

      }
    }
  }
`;

export const HeadTr = styled.tr`
  height: 60px;
  color: #373a3c;
  background-color: #eceeef;

  @media screen and ${responsiveBreakPoints.laptop_maxWidth} {
    font-size: 15px;
  }
`;

export const Th = styled.th`
`;

export const RowTr = styled.tr`
  height: 50px;
  color: #373a3c;
  border-bottom: solid 1px #ddd;

  @media screen and ${responsiveBreakPoints.laptop_maxWidth} {
    height: 30px;
  }
`;

export const Td = styled.td`
  font-size: 16px;
`;
