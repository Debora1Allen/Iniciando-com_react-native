import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TabContainer = styled.TouchableOpacity<{ isActive: boolean }>`
  padding: 10px 0;
  ${(props) =>
    props.isActive &&
    css`
      border-bottom-width: 4px;
      border-color: #3a3f47;
    `}
`;
