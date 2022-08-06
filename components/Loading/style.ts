import styled from "@emotion/styled";

export const Spinner = styled.div`
  border-top: 4px solid green; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
