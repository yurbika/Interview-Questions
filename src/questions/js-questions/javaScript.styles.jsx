import styled from "styled-components";
import theme from "../../utils/theme";

//Question number:1
export const Form = styled.div`
  width: inherit;
  max-width: 200px;
  margin-top: 0;
  text-align: center;
  padding: 0;

  &,
  & * {
    border: 1px solid ${theme.colors.blue};
    padding: 5px 15px;
  }
  &:hover,
  & *:hover {
    background-color: ${theme.colors.rgbaBlue};
  }

  & *,
  & * * {
    background-color: ${theme.colors.grey};
  }

  & div:hover,
  & * div:hover {
    background-color: ${theme.colors.rgbaBlue};
  }

  & p:hover,
  & * p:hover {
    background-color: ${theme.colors.rgbaBlue};
  }
`;
