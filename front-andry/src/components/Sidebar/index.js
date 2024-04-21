import { useNavigate } from 'react-router-dom';
import Text from '../../components/Text'
import {
  Container, BodyBlurContainer, BodyContainer, LinkContainer,
  LinksContainer, BodyNoBlurContainer, TextContainer, StyledText
} from './styles';

export default function Sidebar({
  asideData = [],
}) {
  const navigate = useNavigate();

  function goToPath(path) {
    if (path) navigate(path);
  }

  return (
    <Container>
      <BodyBlurContainer />
      <BodyNoBlurContainer>
        <BodyContainer>
          <TextContainer>
            <StyledText size={'medium'} text={"AgeMed"} />
          </TextContainer>
          <LinksContainer>
            {asideData.map((v, i) => (
              <LinkContainer key={i} onClick={() => goToPath(v.redirectTo)}>
                {v.icon}
                <Text size={'small'} text={v.label} />
              </LinkContainer>
            ))}
          </LinksContainer>
        </BodyContainer>
      </BodyNoBlurContainer>
    </Container>
  );
}
