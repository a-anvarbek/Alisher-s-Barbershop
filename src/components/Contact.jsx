import { useState } from "react";

import styled from "styled-components";

import { Dialog } from "@mui/material";

import Image1 from "../Images/instagram.png";
import Image2 from "../Images/telegram.png";
import Image3 from "../Images/mobile.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Text = styled.div`
  width: 550px;
  height: 631px;
`;

const P = styled.p`
  font-size: 1.3rem;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const H1 = styled.h1`
  padding: 20px 30px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Button = styled.button`
  width: 260px;
  height: 80px;
  background-image: url("https://i.postimg.cc/jdn5V4WT/contact3.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #222;
  text-align: center;
  line-height: 80px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const DialogWrapper = styled.div`
  width: 400px;
  height: 300px;
  display: grid;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  padding: 0px 10px;
`;

const Content = styled.a`
  font-size: 1.7rem;
  text-decoration: none;
  display: flex;
  gap: 13px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

const ContentP = styled.p`
  font-size: 1.7rem;
  color: blue;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <Text>
        <H1>ALISHER'S BARBERSHOP</H1>
        <P>
          Namangan shahrida joylashganmiz va 2012-yildan beri mijozlarimizga
          xizmat ko‘rsatib kelmoqdamiz. Biz salonimizda sizga ajoyib tajriba
          taqdim etishga harakat qilamiz — ketayotganda yuzingizda tabassum
          bo‘lishi kafolatlanadi.
        </P>

        <P>
          Salonimizga kirganingiz zahoti sizga e’tibor qaratiladi. Kutishga
          to‘g‘ri kelsa, siz televizor korip torishingiz yoki suv ichishingiz
          mumkin!
        </P>

        <P>
          Oldindan kelishilgan uchrashuvlar ham, bexosdan kelgan mehmonlar ham
          qabul qilinadi — biz bilan telefon yoki instagram orqali bog‘laning.
        </P>

        <Button onClick={handleOpenDialog}>Contact</Button>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogWrapper>
            <Title>Bog'lanish uchun</Title>

            <Content href="https://www.instagram.com/alisher.barber.nmg?igsh=MTRyc213N2tqdTcwcQ==">
              <Img src={Image1} />
              <ContentP>alisher.barber.nmg</ContentP>
            </Content>

            <Content href="">
              <Img src={Image2} />
              <ContentP>Alisher Barbershop</ContentP>
            </Content>

            <Content href="tel:+998934969300">
              <Img src={Image3} />
              <ContentP>+998 93 496 93-00</ContentP>
            </Content>
          </DialogWrapper>
        </Dialog>
      </Text>
    </Wrapper>
  );
};

export default Contact;
