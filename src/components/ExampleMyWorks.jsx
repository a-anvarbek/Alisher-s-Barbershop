import styled from "styled-components";

import Image1 from "../Images/img1.jpg";
import Image2 from "../Images/img2.jpg";
import Image3 from "../Images/img3.jpg";
import Image4 from "../Images/img4.jpg";
import Image5 from "../Images/img7.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";

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
  cursor: pointer;
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
  color: #888;
  padding: 40px 20px;
  height: 160px;
  text-align: center;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const FooterA = styled.a`
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: #808080;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ImgModal = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const images = [
  { image: Image1, type: 'Item1' },
  { image: Image3, type: 'Item3' },
  { image: Image4, type: 'Item4' },
  { image: Image5, type: 'Item5' },
  { image: Image2, type: 'Item2' },
];

const ExampleMyWorks = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const imageComponents = {
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
  };

  return (
    <Wrapper>
      <Title>Bizning Makonimiz</Title>

      <Content>
        {images.map((img, index) => {
          const ImgComponent = imageComponents[img.type] || Img;
          return (
            <ImgComponent
              key={index}
              src={img.image}
              alt={`Image ${index}`}
              onClick={() => setSelectedImg(img.image)}
            />
          );
        })}
      </Content>

      {selectedImg && (
        <Modal onClick={() => setSelectedImg(null)}>
          <ImgModal src={selectedImg} alt="Full view" />
        </Modal>
      )}

      <Footer>
        <FooterA href="https://t.me/NextPageDev">&copy;2025 a-anvarbek & NextPage</FooterA>
      </Footer>
    </Wrapper>
  );
};

export default ExampleMyWorks;
