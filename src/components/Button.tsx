import * as React from "react";
import styled, { css, CSSObject } from "styled-components";
import { colors } from "../theme";

interface StyledComponentProps {
  style: CSSObject;
}

interface ButtonProps extends StyledComponentProps {
  children: React.ReactNode;
}

const StyledComponent = styled.button<StyledComponentProps>`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${colors.darkGrayishBlue};
  cursor: pointer;
  ${(props) =>
    css`
      ${props.style}
    `}

  &:hover {
    color: ${colors.blue};
  }
`;

export default function Button({ children, style = {} }: ButtonProps) {
  return <StyledComponent style={style}>{children}</StyledComponent>;
}
