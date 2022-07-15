import React from "react";
import { TextInputProps, TextInput as TextInputRN } from "react-native";
import { Container, InputText } from "./Input.styles";

interface InputProps extends TextInputProps {
  rightIcon?: React.ReactElement;
}
export default function Input(props: InputProps) {
  const { rightIcon, ...otherProps } = props;
  return (
    <Container>
      <InputText {...otherProps} />
      {rightIcon && rightIcon}
    </Container>
  );
}
