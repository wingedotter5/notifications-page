import styled from "styled-components";
import { colors } from "../theme";

interface StyledComponentProps {
  width: string;
  height: string;
  color: string;
  backgroundColor: string;
}

interface BadgeProps extends Partial<StyledComponentProps> {
  count: number;
}

const StyledComponent = styled.div<StyledComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;
  font-weight: bold;
`;

export default function Badge({
  count,
  width = "30px",
  height = "25px",
  color = "white",
  backgroundColor = colors.blue,
}: BadgeProps) {
  return (
    <StyledComponent
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
    >
      {count}
    </StyledComponent>
  );
}
