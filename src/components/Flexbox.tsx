import * as React from "react";
import styled, { css, CSSObject } from "styled-components";

interface StyledComponentProps {
  direction: string;
  wrap: string;
  justifyContent: string;
  alignItems: string;
  gap: string;
  style?: CSSObject;
}

interface FlexboxProps extends Partial<StyledComponentProps> {
  children?: React.ReactNode;
}

const StyledComponent = styled.div<StyledComponentProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  ${(props) =>
    css`
      ${props.style}
    `};
`;

export default function Flexbox({
  children,
  direction = "row",
  wrap = "nowrap",
  justifyContent = "flex-start",
  alignItems = "stretch",
  gap = "0",
  style = {},
}: FlexboxProps) {
  return (
    <StyledComponent
      direction={direction}
      wrap={wrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      style={style}
    >
      {children}
    </StyledComponent>
  );
}
