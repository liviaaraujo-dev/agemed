import { useState, useEffect, useCallback } from "react";
import { Container, StyledText } from './styles';

export default function Text({
  size,
  font,
  text,
  ...props
}) {

  return (
    <Container {...props}>
      <StyledText size={size}>{text}</StyledText>
    </Container>
  );
}
