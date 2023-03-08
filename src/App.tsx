import styled from "styled-components";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Flexbox from "./components/Flexbox";
import NotificationItem from "./NotificationItem";
import NotitficationPanel from "./NotificationPanel";
import { colors } from "./theme";
import items from "./constants/items";

const AppContainer = styled.div`
  background-color: ${colors.veryLightGrayishBlue};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <AppContainer>
        <NotitficationPanel>
          <Flexbox
            justifyContent="space-between"
            alignItems="flex-end"
            style={{ marginBottom: "10px" }}
          >
            <Flexbox alignItems="flex-end" gap="10px">
              <h3>Notifications</h3>
              <Badge count={3} />
            </Flexbox>
            <Button style={{ fontSize: "14px", fontWeight: "bold" }}>
              Mark all as read
            </Button>
          </Flexbox>
          <div>
            {items.map((item) => (
              <NotificationItem key={item.id} item={item} />
            ))}
          </div>
        </NotitficationPanel>
      </AppContainer>
    </>
  );
}

export default App;
