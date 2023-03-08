import styled from "styled-components";
import { colors } from "../theme";

interface LinkProps {
  color?: string;
}

const Link = styled.a<LinkProps>`
  cursor: pointer;
  font-weight: bold;
  color: ${(props) => props.color ?? colors.darkGrayishBlue};
  text-decoration: none;
  &:hover {
    color: ${colors.blue};
  }
`;

export default Link;
