import styled from "styled-components";

//Question number:1
export const Form = styled.div`
  width: inherit;
  max-width: 200px;
  margin-top: 0;
  text-align: center;
  padding: 0;

  &,
  & * {
    border: 1px solid blue;
    padding: 5px 15px;
  }
  &:hover,
  & *:hover {
    background-color: #9999df;
  }

  & *,
  & * * {
    background-color: grey;
  }

  & div:hover,
  & * div:hover {
    background-color: #9999df;
  }

  & p:hover,
  & * p:hover {
    background-color: #9999df;
  }
`;
