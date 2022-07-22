import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  height: 100%;
 
`;


export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  visibility: ${({isVisible}) => (isVisible ? 'visible' : 'hidden')};

  .pagination {
    display: flex;
    list-style: none;
    padding: 8px 12px;


    li {
      color: #373a3c;
      border: solid 1px #ddd;
      font-size: 16px;

      :first-child {
        display: none;
      }

      :last-child {
        display: none;
      }


      a {
        text-decoration: none;
        font-size: 16px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #373a3c;
      }
    }
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > div:last-child {
    flex-grow: 1;
  }
`;

