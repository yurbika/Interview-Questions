import styled, { css } from "styled-components";
import theme from "../../utils/theme";

const getAdditionalStyle = props => {
  if (props.secondary)
    return css`
      background: transparent;
      border: 1px solid ${theme.colors.blue};
      span {
        color: ${theme.colors.blue};
      }
      &:hover {
        background: ${theme.colors.lightOrange};
      }
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
    padding: 10px 15px;
  }

  &:hover {
    background: ${theme.colors.blue};
  }
  ${getAdditionalStyle}
`;
