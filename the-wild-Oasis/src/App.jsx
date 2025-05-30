import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from './ui/Button';
import Input from "./ui/Input";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`



const StyledApp = styled.div`
background-color:orange ;
padding: 20px;
`
function App() {
  return( 
  <>
  <GlobalStyles />
  <StyledApp>
    <h1>The wild Oasis</h1>
    <Button onClick={()=> alert('check in')} >check In</Button>
    <Button onClick={()=> alert('check out')} >check Out</Button>
    <Input type="number" placeholder="Number of guest"/>
    </StyledApp>
  </>
    );
}

export default App;
