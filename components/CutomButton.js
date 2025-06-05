import { View, Text, Pressable, StyleSheet } from "react-native";
import { scale, verticalScale } from "./responsiveness/Responsive";

export default function CutomButton({ title, onPress, marginTop = 74 }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { marginTop: verticalScale(marginTop) }]}
      className=" bg-[#2E7D32] justify-center items-center"
    >
      <Text style={styles.title} className="text-[#fff]  font-poppins-semiBold">
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(60),
    width: scale(254),
    height: verticalScale(60),
    borderRadius: scale(14),
    paddingHorizontal: scale(64),
    paddingVertical: verticalScale(18),
  },
  title: {
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    letterSpacing: scale(0),
  },
});
