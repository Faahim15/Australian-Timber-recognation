import { View, Text, StyleSheet } from "react-native";

import { scale, verticalScale } from "./responsiveness/Responsive";

export default function CustomTitle({
  title,
  subtitle,
  description,
  marginTop = 71,
}) {
  return (
    <View style={[styles.title, { marginTop: verticalScale(marginTop) }]}>
      <Text className="text-2xl-custom text-center font-poppins-semiBold">
        {title}
      </Text>
      <Text
        style={styles.subtitle}
        className="text-center text-wrap  font-poppins-400regular "
      >
        {subtitle}
      </Text>
      {description ? (
        <Text className="text-center font-poppins text-xs">{description}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "column",
    marginLeft: scale(20),
    marginRight: scale(23),
    lineHeight: verticalScale(36),
    letterSpacing: scale(0),
    gap: verticalScale(5),
  },
  subtitle: {
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    color: "#3E2723",
  },
});
