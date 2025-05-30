import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`
const Button = styled.button`
  background-color: aliceblue;
`
const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`

const StyledApp = styled.div`
background-color:orange ;
padding: 20px;
`
function App() {
  return (<StyledApp>
    <h1>The wild Oasis</h1>
    <Button onClick={()=> alert('check in')} >check In</Button>
    <Button onClick={()=> alert('check out')} >check Out</Button>
    <Input type="number" placeholder="Number of guest"/>
    </StyledApp>);
}

export default App;
