import { View, Text, StyleSheet, Pressable } from "react-native";
import { scale, verticalScale } from "../responsiveness/Responsive";

export default function Subscription({
  title,
  duration,
  description1,
  description2,
  description3,
  borderColor = "#2E7D32",
  containerBg = "#fff",
  circleColor = "#fff",
}) {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: containerBg, borderColor: borderColor },
      ]}
    >
      <View className="flex-row justify-between ">
        <Text style={styles.freeTrial} className="font-poppins-semiBold">
          {title}
        </Text>
        <Text
          style={[
            styles.makeCircle,
            {
              backgroundColor: circleColor,
              borderColor: "#2E7D32",
              borderWidth: 1,
            },
          ]}
          className="rounded-full"
        ></Text>
      </View>
      <Text style={styles.subtitle}>{duration}</Text>
      <Text style={styles.description}>
        {"\u2022"} {description1}
      </Text>
      <Text style={styles.description}>
        {"\u2022"} {description2}
      </Text>
      <Text style={styles.description}>
        {"\u2022"} {description3}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: scale(335),
    height: verticalScale(163),
    borderRadius: scale(14),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(16),
    marginHorizontal: scale(20),
    marginTop: verticalScale(16),
    borderWidth: scale(1),
    justifyContent: "space-between",
  },
  makeCircle: {
    width: scale(15),
    height: verticalScale(15),
  },
  freeTrial: {
    fontSize: scale(12),
    lineHeight: verticalScale(18),
    letterSpacing: scale(0),
  },
  subtitle: {
    fontFamily: "poppins-semiBold",
    fontSize: scale(16),
    lineHeight: verticalScale(21),
    letterSpacing: scale(0),
    color: "#3E2723",
  },
  description: {
    fontFamily: "poppins-400regular",
    fontSize: scale(14),
    lineHeight: verticalScale(21),
    letterSpacing: scale(0),
    color: "#3E2723",
  },
});
