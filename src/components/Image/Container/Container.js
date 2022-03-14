import styled from "styled-components";

export const Container = styled("div")`
  cursor: pointer;
  width: 200px;
  height: 200px;
  margin: 10px;

  background-image: ${({ source }) => `url(${source})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
