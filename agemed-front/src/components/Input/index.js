import { Container, Label, StyledInput } from "./styles";

export default function Input({
  placeholder,
  label,
  kind,
  type = "text",
  onChange
}) {

  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput type={type} kind={kind} placeholder={placeholder} onChange={onChange} />
    </Container>
  );
}
