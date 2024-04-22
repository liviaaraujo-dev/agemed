import { useState, useEffect, useCallback } from "react";
import { Container, Label, StyledInput } from "./styles";

export default function Input({
  placeholder,
  label,
  kind,
  type = "text",
}) {

  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput type={type} kind={kind} placeholder={placeholder} />
    </Container>
  );
}
