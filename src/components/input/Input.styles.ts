import { TextInput, TextInputProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background: #3a3f47;
  border-radius: 16px;
  padding: 12px;
  flex-direction: row;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  font-size: 14px;
  color: #ffffff;
`;
