import { useState } from "react";
import styled from "styled-components";

import Image from "../Images/Background.jpg";
import Image2 from "../Images/Background2.jpg";
import Image3 from "../Images/img2.jpg";
import Image4 from "../Images/img7.jpg";
import Image5 from "../Images/img8.jpg";

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
    width: 150px;
    height: 150px;
  }
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    width: 270px;
    height: 270px;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 125px;
    height: 125px;

    &:hover {
      width: 150px;
      height: 150px;
      transform: scale(1.05);
    }
  }
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
  {
    image: Image3,
  },
  {
    image: Image4,
  },
  {
    image: Image5,
  },
];

const MainPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Wrapper>
      <Container>
        {images.map((img, index) => (
          <Case key={index}>
            <Img
              src={img.image}
              alt={`Image ${index}`}
              onClick={() => setSelectedImg(img.image)}
            />
          </Case>
        ))}
      </Container>

      {selectedImg && (
        <Modal onClick={() => setSelectedImg(null)}>
          <ImgModal src={selectedImg} alt="Enlarged" />
        </Modal>
      )}
    </Wrapper>
  );
};

export default MainPage;
