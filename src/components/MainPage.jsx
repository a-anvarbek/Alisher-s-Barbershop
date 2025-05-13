import styled from "styled-components";

import Image from "../Images/Background.jpg";
import Image2 from "../Images/Background2.jpg";
import Image3 from "../Images/img2.jpg";
import Image4 from "../Images/img7.jpg";
import Image5 from "../Images/img6.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1e1e1e;
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    background-image: url(${Image2});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
  }
`;

const Case = styled.div`
  background-color: #fff;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Img = styled.img`
  width: 250px;
  height: 250px;

  @media (max-width: 768px) {
    width: 175px;
    height: 175px;
  }
`;

const MainPage = () => {
  return (
    <Wrapper>
      <Container>
        <Case>
          <Img src={Image3} />
        </Case>
        <Case>
          <Img src={Image4} />
        </Case>
        <Case>
          <Img src={Image5} />
        </Case>
      </Container>
    </Wrapper>
  );
};

export default MainPage;
