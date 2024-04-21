import { Container, BlurContainer, BodyContainer } from './styles';
export default function BlurContainerComponent({
  children,
  ...props
}) {

  return (
    <Container {...props}>
      <BlurContainer />
      <BodyContainer>
        {children}
      </BodyContainer>
    </Container>
  );
}
