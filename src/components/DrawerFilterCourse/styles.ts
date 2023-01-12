import styled from 'styled-components';

export const StyledDrawerFilter = styled.div`
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    a {
      margin-inline-start: 0;
      max-width: 200px;
      min-width: 120px;
      width: 25%;
      div {
        width: 140px;
      }
    }
  }
`;
