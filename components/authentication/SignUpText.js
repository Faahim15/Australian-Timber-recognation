import { View, Text, Pressable, StyleSheet } from "react-native";
import { verticalScale, scale } from "../responsiveness/Responsive";

export default function SignUpText({
  onPress,
  text,
  buttonText,
  marginTop = 59,
}) {
  return (
    <View style={[styles.container, { marginTop: verticalScale(marginTop) }]}>
      <Text className="text-[#3E2723]" style={styles.titleText}>
        {text}
        <Text
          onPress={onPress}
          className="text-[#2E7D32]"
          style={styles.titleText}
        >
          {buttonText}
        </Text>
      </Text>
      <Text style={styles.titleText} className="text-center">
        Or connect
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: scale(220),
    height: verticalScale(47),
    marginLeft: scale(70),
    gap: verticalScale(7),
  },
  titleText: {
    fontFamily: "poppins-400regular",
    fontSize: scale(14),
    lineHeight: verticalScale(16),
    letterSpacing: scale(0),
  },
});
