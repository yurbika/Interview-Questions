import styled, { css } from "styled-components";

const getAdditionalStyle = props => {
  if (props.cancel)
    return css`
      background: #595959;
    `;
};

export const CustomButtonContainer = styled.button`
  cursor: pointer;
  position: relative;
  width: 150px;
  height: 2.5rem;
  outline: none;
  border: none;
  background: #f2490c;
  border-radius: 15px;
  font-size: 1rem;
  span {
    color: white;
    pointer-events: none;
  }
  &:hover {
    background: #010a26;
  }
  ${getAdditionalStyle}
`;
