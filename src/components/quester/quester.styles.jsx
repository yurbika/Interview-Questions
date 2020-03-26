import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 15px;
  text-align: center;

  & * {
    margin-bottom: 15px;
  }

  textarea {
    resize: none;
    height: 150px;
    width: 100%;
    outline: none;
    border-radius: 15px;
    padding: 15px;
  }
`;
