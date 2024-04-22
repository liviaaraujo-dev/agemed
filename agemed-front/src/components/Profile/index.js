import { useState } from 'react';
import { ArrowDown, ArrowUp } from '../Icons';
import {
  Container, DataContainer, ImageContainer, StyledImg, StyledText, BodyContainer,
  StyledBlurContainer, Container1, IconContainer
} from './styles';
export default function Profile() {

  const [isOpened, setIsOpened] = useState(false);

  return (
    <Container>
      <StyledBlurContainer>
        <BodyContainer>
          <Container1>
            <ImageContainer>
              <StyledImg src={"assets/images/profile.jpg"} />
            </ImageContainer>
            <DataContainer>
              <StyledText size={"small-1"} text={"Lívia Pereira"} />
              <StyledText size={"small-2"} text={"Recepcionista"} />
            </DataContainer>
          </Container1>
          <IconContainer onClick={() => setIsOpened(!isOpened)}>
            {isOpened ? <ArrowUp size={23} /> : <ArrowDown size={23} />}
          </IconContainer>
        </BodyContainer>
      </StyledBlurContainer>
    </Container>
  );
}
