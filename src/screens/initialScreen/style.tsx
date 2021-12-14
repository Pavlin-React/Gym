import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

let createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: RFValue(25),
    },
  });

export default createStyles;
