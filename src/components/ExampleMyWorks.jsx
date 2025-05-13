import styled from "styled-components";

import Image1 from "../Images/img1.jpg";
import Image2 from "../Images/img2.jpg";
import Image3 from "../Images/img3.jpg";
import Image4 from "../Images/img4.jpg";
import Image5 from "../Images/img7.jpg";
import Image6 from "../Images/instagram.png";


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1e1e1e;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: gold;
  text-shadow: 2px 2px 4px #000;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 15px;
  max-width: 1000px;
  margin: 0 auto 50px auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

// Grid position
const Item1 = styled(Img)`
  grid-column: span 1;
  grid-row: span 2;
`;

const Item2 = styled(Img)`
  grid-column: span 2;
  grid-row: span 1;

  @media (max-width: 768px) {
    grid-columns: span 1;
    grid-row: span 1;
  }
`;

const Item3 = styled(Img)`
  grid-column: span 1;
  grid-row: span 2;
`;

const Item4 = styled(Img)`
  grid-column: span 1;
  grid-row: span 1;
`;

const Item5 = styled(Img)`
  grid-column: span 1;
  grid-row: span 1;
`;

const Footer = styled.div`
  background-color: #111;
  color: #eee;
  padding: 40px 20px;
  height: 160px;
  text-align: center;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const H1 = styled.h1``;

const ExampleMyWorks = () => {
  return (
    <Wrapper>
      <Title>Bizning Makonimiz</Title>
      <Content>
        <Item1 src={Image1} />
        <Item3 src={Image3} />
        <Item4 src={Image4} />
        <Item5 src={Image5} />
        <Item2 src={Image2} />
      </Content>
      <Footer>
        <ContentFooter href="">
          <Img src={Image6} />
        </ContentFooter>
      </Footer>
    </Wrapper>
  );
};

export default ExampleMyWorks;
