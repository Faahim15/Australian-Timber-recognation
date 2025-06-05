import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { scale, verticalScale } from "../responsiveness/Responsive";

export default function OtpVerificationInput() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto focus next
    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(30),
    marginTop: scale(20),
  },
  input: {
    width: scale(50),
    height: scale(50),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: scale(10),
    textAlign: "center",
    fontSize: scale(20),
    backgroundColor: "#fff",
  },
});
