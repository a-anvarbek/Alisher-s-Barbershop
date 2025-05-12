import styled from "styled-components";
import "./App.css";
import MainPage from "./components/MainPage";

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

export default App;
