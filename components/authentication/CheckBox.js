import { View, Text, StyleSheet, Pressable } from "react-native";
import { scale, verticalScale } from "../responsiveness/Responsive";
import Checkbox from "expo-checkbox";
import { useState } from "react";
export default function CheckBox() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Pressable onPress={() => setRememberMe(!rememberMe)}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            style={styles.checkbox}
          />
        </Pressable>
        <Text style={styles.rememberMeText} className="font-poppins-500medium">
          Remember Me
        </Text>
      </View>
      <View>
        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: scale(335),
    height: verticalScale(16),
    marginHorizontal: scale(20),
    justifyContent: "space-between",
    marginTop: verticalScale(16),
  },
  checkboxContainer: {
    flexDirection: "row",
    gap: scale(5),
  },
  checkbox: {
    width: scale(14),
    height: scale(14),
    borderWidth: scale(1),
    borderRadius: scale(4),
  },
  rememberMeText: {
    fontSize: scale(14),
    lineHeight: verticalScale(16),
    letterSpacing: 0,
    color: "#3E2723",
  },
  forgetPasswordText: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    lineHeight: verticalScale(16),
    textAlign: "right",
    fontSize: scale(14),
    letterSpacing: scale(0),
    color: "#535353",
    fontFamily: "poppins-400regular",
  },
});
