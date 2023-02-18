import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  color: red;
  background: ${props=>props.asdd ? "orange" : "white"};
  &:hover{
    background: red;
    color:${props=>props.asdd ? "blue" : "white"};
  };
`;
