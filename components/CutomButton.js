import { View, Text, Pressable, StyleSheet } from "react-native";
import { scale, verticalScale } from "./responsiveness/Responsive";

export default function CutomButton({
  width = 254,
  title,
  onPress,
  marginTop = 74,
  marginHorizontal = 60,
  borderRadius = 14,
  paddingHorizontal = 64,
  paddingVertical = 18,
  height = 60,
  lineHeight = 24,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: scale(width),
        height: verticalScale(height),
        marginTop: verticalScale(marginTop),
        marginHorizontal: scale(marginHorizontal),
        borderRadius: scale(borderRadius),
        paddingHorizontal: scale(paddingHorizontal),
        paddingVertical: verticalScale(paddingVertical),
      }}
      className=" bg-[#2E7D32] justify-center items-center"
    >
      <Text
        style={[styles.title, { lineHeight: verticalScale(lineHeight) }]}
        className="text-[#fff]  font-poppins-semiBold"
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: scale(16),
    letterSpacing: scale(0),
  },
});
