import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacityProps,
} from "react-native";
import { List } from "react-native-paper";
import Chaves from "../Chaves";
import { Button } from "@/app-example/components/button";

type Props = TouchableOpacityProps & {
  chave?: string;
  esporte?: string;
  duplas?: string;
};

export default function Jogos({ chave, ...rest }: Props) {
  return (
    <View>
      <List.AccordionGroup>
        <List.Accordion title={"Chave " + chave} id="1" style={styles.acordion}>
          {/* <List.Item title="Item 2" /> */}
          <View>
            <View style={styleDivChaveButton.divButtons}>
              <Button title="Pontos" />
              <Button title="Jogos" />
            </View>
            <Text>TESTE</Text>
            <Chaves />
          </View>
        </List.Accordion>
        {/* <List.Accordion title="Chaves B" id="2">
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
        </View> */}
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

const styleDivChaveButton = StyleSheet.create({
  divButtons: {
    display: "flex",
    flexDirection: "row",
  },
});
