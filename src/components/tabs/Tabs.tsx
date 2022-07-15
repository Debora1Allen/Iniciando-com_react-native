import React from "react";
import { Text } from "react-native";
import { Container, TabContainer } from "./Tabs.styles";

interface TabProps {
  tabs: string[];
  activeTab: number;
  onChangeTab: (tab: number) => void;
}

export function Tabs(props: TabProps) {
  const { tabs, onChangeTab, activeTab } = props;

  const handleChangeTab = (tab: number) => () => {
    if (tab === activeTab) {
      return;
    }
    onChangeTab(tab);
  };

  return (
    <Container>
      {tabs.map((tab, index) => (
        <TabContainer
          key={tab}
          isActive={activeTab === index}
          onPress={handleChangeTab(index)}
        >
          <Text style={{ color: "white" }}>{tab}</Text>
        </TabContainer>
      ))}
    </Container>
  );
}
