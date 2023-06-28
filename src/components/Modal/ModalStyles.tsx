import styled from "styled-components";

export const StyledModal = styled.div`
  width: 500px;
  border: 2px solid #1b116e;
  vertical-align: top;
  transition: 1.1s ease-in-out;
  box-shadow: -32px 32px 32px rgba(0, 0, 0, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  margin: auto;
  background-color: white;
  visibility: visible;
  padding: 10px;
  position: absolute;
  top: 0;
`;

export const StyledBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
