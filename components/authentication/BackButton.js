import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "../responsiveness/Responsive";

export default function BackButton({ marginTop = 38 }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        style={[styles.backBtn, { marginTop: verticalScale(marginTop) }]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    width: scale(44),
    height: verticalScale(44),
    fontSize: scale(24),
    color: "#2E7D32",
    marginTop: verticalScale(11),
    marginLeft: scale(15),
    marginRight: scale(316),
  },
});
