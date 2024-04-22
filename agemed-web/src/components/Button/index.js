import { Container, StyledButton } from './styles';

export default function Button({
  placeholder,
  label,
  type,
  onClick
}) {

  return (
    <Container>
      <StyledButton onClick={onClick}>
        {label}
      </StyledButton>
    </Container>
  );
}
