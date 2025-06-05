import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "../responsiveness/Responsive";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function PasswordInput() {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.passwordInputContainer}>
      <TextInput
        className="font-poppins"
        placeholder="password"
        secureTextEntry={secureText}
      />
      <TouchableOpacity
        onPress={() => {
          setSecureText(!secureText);
        }}
      >
        <Ionicons
          style={styles.eyeOffNdOn}
          name={secureText ? "eye-off" : "eye"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  passwordInputContainer: {
    backgroundColor: "#F7F7F9",
    width: scale(335),
    height: verticalScale(56),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(16),
    borderRadius: scale(14),
    marginHorizontal: scale(20),
    marginTop: verticalScale(24),
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#898989",
    fontSize: scale(12),
    lineHeight: verticalScale(16),
    letterSpacing: scale(0),
    textAlign: "right",

    // ✅ iOS shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: scale(4),
    elevation: scale(4),
  },
  eyeOffNdOn: {
    width: scale(24),
    height: verticalScale(24),
    fontSize: scale(24),
  },
});
