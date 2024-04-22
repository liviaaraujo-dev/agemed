import Text from '../Text';
import { Container } from './styles';
export default function Navbar({
  text,
}) {

  return (
    <Container>
      <Text size={"medium-2"} text={text} />
      <p>Lívia</p>
    </Container>
  );
}
