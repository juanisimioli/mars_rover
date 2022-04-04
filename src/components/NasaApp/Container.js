import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  padding: 45px 60px;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;
