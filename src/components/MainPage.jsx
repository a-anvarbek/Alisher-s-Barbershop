import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1e1e1e;
  background-image: url("https://i.postimg.cc/BnbhpttX/pic1.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 4.5rem;
  color: gold;
  text-shadow: 2px 2px 4px #000;
  padding: 10px 10px;
  border-radius: 8px;
`;

const MainPage = () => {
  return (
    <Wrapper>
      <H1>Alisher's Barbershop</H1>
    </Wrapper>
  );
};

export default MainPage;
