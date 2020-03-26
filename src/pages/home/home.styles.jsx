import styled from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

export const Content = styled.div`
  position: relative;
  background-color: ${theme.colors.grey};
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 5px 5px 5px ${theme.colors.rgbaBlue};
  transition: all 0.5s ease-in;
  margin-bottom: 60px;
`;
