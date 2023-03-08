import styled from "styled-components";
import Flexbox from "./components/Flexbox";
import Link from "./components/Link";
import { colors } from "./theme";
import { Item } from "./constants/items";

interface StyledComponentProps {
  read: boolean;
}

interface NotificationItemProps {
  item: Item;
}

const StyledComponent = styled.li<StyledComponentProps>`
  background-color: ${(props) =>
    !props.read ? colors.veryLightGrayishBlue : "white"};
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  color: ${colors.darkGrayishBlue};
`;

const Message = styled.p`
  line-height: 32px;
  background-color: ${colors.lightGrayishBlue1};
  padding: 0.625rem 1.25rem;
  border-radius: 4px;

  @media screen and (max-width: 375px) {
    background-color: ${colors.white};
    border: 1px solid ${colors.lightGrayishBlue2};
  }
`;

export default function NotificationItem({ item }: NotificationItemProps) {
  return (
    <StyledComponent read={item.read}>
      <Flexbox alignItems="flex-start" gap="15px">
        <img
          style={{
            width: "50px",
            height: "50px",
          }}
          src={item.user.avatar}
          alt={item.user.name}
        />
        <Flexbox direction="column" gap="5px">
          <p>
            <Link href={item.user.url}>{item.user.name}</Link> {item.action}{" "}
            {item.postOrGroup && (
              <Link color={colors.darkGrayishBlue} href={item.postOrGroup.url}>
                {item.postOrGroup.title}
              </Link>
            )}
            {!item.read && (
              <span style={{ color: colors.red, fontSize: "24px" }}>
                {" "}
                &bull;
              </span>
            )}
          </p>
          <p>{item.time}</p>
          {item.message && <Message>{item.message}</Message>}
        </Flexbox>
        {item.picture && (
          <a href={item.picture.href} style={{ marginLeft: "auto" }}>
            <img
              style={{
                width: "50px",
                height: "50px",
              }}
              src={item.picture.url}
              alt={item.picture.alt}
            />
          </a>
        )}
      </Flexbox>
    </StyledComponent>
  );
}
