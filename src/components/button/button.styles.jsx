import styled, { css } from "styled-components";
import theme from "../../utils/theme";

const getAdditionalStyle = props => {
  if (props.cancel)
    return css`
      background: ${theme.colors.darkGrey};
    `;
  if (props.shadow)
    return css`
      opacity: 0;
      pointer-events: none;
    `;
};

export const CustomButtonContainer = styled.button`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 2.5rem;
  outline: none;
  border: none;
  background: ${theme.colors.orange};
  border-radius: 15px;
  font-size: 1rem;

  span {
    color: white;
    pointer-events: none;
    padding: 15px 30px;
  }

  &:hover {
    background: ${theme.colors.blue};
  }
  ${getAdditionalStyle}
`;
