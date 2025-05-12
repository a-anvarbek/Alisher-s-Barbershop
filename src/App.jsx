import styled from "styled-components";
import "./App.css";
import MainPage from "./components/MainPage";
import Contact from "./components/Contact";

const Wrapper = styled.div`
  width: 100%;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

function App() {
  return (
    <Wrapper>
      <MainPage />
      <Contact />
    </Wrapper>
  );
}

export default App;
