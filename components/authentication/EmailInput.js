import { View, TextInput, StyleSheet } from "react-native";
import { scale, verticalScale } from "../responsiveness/Responsive";

export default function EmailInput({
  placeholder = "Enter your email..",
  marginTop = 37,
  keyboardType = "email-address",
  autoCapitalize = "none",
}) {
  return (
    <View>
      <TextInput
        style={[styles.textInputContainer, { marginTop: marginTop }]}
        className="font-poppins"
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: "#F7F7F9",
    width: scale(335),
    height: verticalScale(56),
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(18),
    marginHorizontal: scale(20),
    marginTop: verticalScale(37),
    borderRadius: scale(14),
    fontSize: scale(12),
    lineHeight: verticalScale(20),
    letterSpacing: scale(0),
    color: "#898989",

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
});
