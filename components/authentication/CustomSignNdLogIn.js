import { View, Text, Pressable, StyleSheet } from "react-native";
import { scale, verticalScale } from "../responsiveness/Responsive";

export function SkipButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text className="font-poppins text-center" style={styles.title}>
        Skip
      </Text>
    </Pressable>
  );
}

export function LoginTitle({ title, subtitle, marginTop = 40 }) {
  return (
    <View
      style={[
        styles.loginTitle,
        {
          marginTop: verticalScale(marginTop),
        },
      ]}
    >
      <Text
        style={[styles.LogInHeader]}
        className="font-poppins-bold text-center"
      >
        {title}
      </Text>
      <Text style={styles.subtitle} className="poppins-400regular text-center">
        {subtitle}
      </Text>
    </View>
  );
  vb;
}

const styles = StyleSheet.create({
  title: {
    width: scale(33),
    height: verticalScale(24),
    marginTop: verticalScale(8),
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    letterSpacing: scale(0),
    marginLeft: scale(322),
    color: "#2E7D32",
  },
  loginTitle: {
    marginHorizontal: scale(52),
    gap: verticalScale(12),
  },
  LogInHeader: {
    lineHeight: verticalScale(36),
    letterSpacing: scale(0),
    fontSize: scale(24),
  },
  subtitle: {
    lineHeight: verticalScale(21),
    fontSize: scale(14),
    letterSpacing: scale(0),
    color: "#3E2723",
  },
});
