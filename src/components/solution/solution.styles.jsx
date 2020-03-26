import styled from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.div`
  position: absolute;
  max-width: 90vw;
  top: 35px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  z-index: 1;
  background-color: ${theme.colors.grey};
  box-shadow: 5px 5px 5px ${theme.colors.rgbaBlue};
  margin-bottom: 100px;
  h1 {
    text-align: center;
    margin: 0;
  }
  & * {
    margin-bottom: 15px;
    padding: 15px;
  }
`;

export const ItemWrapper = styled.div`
  border-bottom: 1px solid ${theme.colors.darkGrey};
  margin: 15px;
  padding: unset;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;

  & * {
    margin: unset;
  }
  pre {
    width: calc(100% - 10px);
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }
`;
