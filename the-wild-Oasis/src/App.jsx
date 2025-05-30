import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from './ui/Button';
import Input from "./ui/Input";
import Heading from "./ui/Heading,jsx";



const StyledApp = styled.div`
background-color:orange ;
padding: 20px;
`
function App() {
  return( 
  <>
  <GlobalStyles />
  <StyledApp>
    <Heading type='h1'>The wild Oasis</Heading>
    
    <Heading type='h2'>heck in and Out</Heading>
    <Button onClick={()=> alert('check in')} >check In</Button>
    <Button onClick={()=> alert('check out')} >check Out</Button>
    <Heading type='h3'>Form</Heading>
    <Input type="number" placeholder="Number of guest"/>
    </StyledApp>
  </>
    );
}

export default App;
