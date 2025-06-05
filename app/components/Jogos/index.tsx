import * as React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { List } from "react-native-paper";
import Chaves from "../Chaves";

export default function Jogos() {
  return (
    <View>
      <List.AccordionGroup>
        <List.Accordion title="Chaves A" id="1" style={styles.acordion}>
          {/* <List.Item title="Item 2" /> */}
          <Chaves />
        </List.Accordion>
        <List.Accordion title="Chaves B" id="2">
          <List.Item title="Item 2" />
        </List.Accordion>
        <View>
          <Text>
            List.Accordion can be wrapped because implementation uses
            React.Context.
          </Text>
          <List.Accordion title="Accordion 3" id="3">
            <List.Item title="Item 3" />
          </List.Accordion>
        </View>
      </List.AccordionGroup>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  acordion: {
    width: screenWidth,
  },
  scrollView: {
    // backgroundColor: "#2A74CD",
    // width: "100%",
  },
  text: {
    padding: 12,
  },
  scrollContent: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
