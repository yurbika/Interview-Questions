import styled, { css } from "styled-components";
import theme from "../../utils/theme";

const getAdditionalStyle = props => {
  if (props.cancel)
    return css`
      background: ${theme.colors.darkGrey};
    `;
};

export const CustomButtonContainer = styled.button`
  cursor: pointer;
  position: relative;
  width: 150px;
  height: 2.5rem;
  outline: none;
  border: none;
  background: ${theme.colors.orange};
  border-radius: 15px;
  font-size: 1rem;
  span {
    color: white;
    pointer-events: none;
  }
  &:hover {
    background: ${theme.colors.blue};
  }
  ${getAdditionalStyle}
`;
