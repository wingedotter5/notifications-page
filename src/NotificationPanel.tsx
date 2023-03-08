import styled from "styled-components";

const NotitficationPanel = styled.ul`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0.5, 0.5, 0.5, 0.1);
  padding: 2rem;
  list-style-type: none;
  max-width: 800px;

  @media screen and (max-width: 375px) {
    padding: 1rem;
  }
`;

export default NotitficationPanel;
