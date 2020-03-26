import styled, { css } from "styled-components";

const getAdditionalStyle = props => {
  if (props.solution)
    return css`
      justify-content: center;
    `;
};

export const Container = styled.div`
  position: fixed;
  max-width: 280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 5;
  bottom: 15px;
  ${getAdditionalStyle}
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;
