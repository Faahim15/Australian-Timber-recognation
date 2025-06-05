import { Text, Pressable, Image, StyleSheet } from "react-native";
import { scale, verticalScale } from "../responsiveness/Responsive";

export default function ContinueWdGogleBtn() {
  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/flat-color-icons_google.png")}
      />
      <Text style={styles.btnText}>Continue with Google</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: scale(277),
    height: verticalScale(47),
    flexDirection: "row",
    marginHorizontal: scale(49),
    marginTop: verticalScale(47),
    marginBottom: verticalScale(84),
    borderRadius: scale(24),
    backgroundColor: "#FFFFFF",
    borderColor: "#3E2723",
    borderWidth: scale(2),
    gap: scale(8),
    paddingVertical: verticalScale(2),
    // paddingHorizontal: scale(2),
    // justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "poppins-400regular",
    fontSize: scale(18),
    lineHeight: verticalScale(18),
    letterSpacing: scale(0.54),
    color: "#000",
  },
  image: {
    width: scale(44),
    height: verticalScale(44),
  },
});
