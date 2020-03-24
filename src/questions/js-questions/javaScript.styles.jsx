import styled from "styled-components";

//Question number:1
export const Form = styled.div`
  &,
  & * {
    border: 1px solid blue;
    padding: 10px 30px;
  }
  &:hover,
  & *:hover {
    background-color: #9999df;
  }

  & *,
  & * * {
    background-color: white;
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
