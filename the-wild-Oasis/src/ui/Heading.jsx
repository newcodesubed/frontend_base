import styled, { css } from "styled-components";
const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
      background-color: yellow;
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      background-color: yellow;
    `}
${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      background-color: yellow;
    `}
`;
export default Heading;
