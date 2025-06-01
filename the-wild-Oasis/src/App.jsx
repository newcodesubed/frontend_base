import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading.jsx";
import Row from "./ui/Row.jsx";

const StyledApp = styled.div`
  /* background-color: orange; */
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and Out</Heading>
              <Button onClick={() => alert("check in")}>check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("check out")}
              >
                check Out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guest" />
              <Input type="number" placeholder="Number of guest" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
