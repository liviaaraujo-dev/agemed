import Text from '../Text';
import Profile from '../Profile';
import { Container } from './styles';
export default function Navbar({
  text,
}) {

  return (
    <Container>
      <Text size={"medium-2"} text={text} />
      <Profile />
    </Container>
  );
}
