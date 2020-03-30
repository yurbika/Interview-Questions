import styled, { css } from "styled-components";

const getAdditionalStyle = props => {
  if (props.solution)
    return css`
      justify-content: center;
    `;
};

export const Container = styled.div`
  position: fixed;
  max-width: 320px;
  right: 20px;
  left: 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 5;
  bottom: 100px;
  ${getAdditionalStyle}
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;
