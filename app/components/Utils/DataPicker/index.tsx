import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const InputData = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  //BIBLIOTECA DATAPICKER N É COMPATIVEL PRA WEB, VOU TER Q FAZER A MAO O DATEPICKER

  const handleChange = (event: DateTimePickerEvent, date?: Date) => {
    console.log(showPicker);

    setShowPicker(false); // Fecha o picker após a escolha
    if (date) {
      setDate(date);
    }
  };

  const pressButton = () => {
    console.log(showPicker);

    setShowPicker(true);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Data do Gatorade</Text>

      <TouchableOpacity onPress={pressButton} style={styles.input}>
        <Text style={styles.inputText}>{formatDate(date)}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          //   display={Platform.OS === "ios" ? "spinner" : "default"}
          //   onChange={handleChange}
          maximumDate={new Date()}
        />
      )}
    </View>
  );
};

export default InputData;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  inputText: {
    fontSize: 16,
    color: "#333",
  },
});
