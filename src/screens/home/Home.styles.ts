import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  padding: 25px;
  background-color: #242a32;
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
`;
