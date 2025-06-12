import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  scale,
  verticalScale,
} from "../../components/responsiveness/Responsive";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons size={24} name="chevron-back" />
          </TouchableOpacity>

          <Text style={styles.text} className="font-poppins-semiBold">
            Profile
          </Text>
        </View>

        <TouchableOpacity style={styles.shadowContainer}>
          <View style={styles.icon}>
            <Ionicons name="person" size={34} color="#FF701D" />
          </View>
          <Ionicons size={24} name="chevron-forward" />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    marginTop: verticalScale(10),
    marginLeft: scale(10),
    color: "#2E7D32",
  },
  title: {
    flexDirection: "row",
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    letterSpacing: scale(0),
    marginHorizontal: scale(20),
    marginTop: verticalScale(14),
  },
  text: {
    fontSize: scale(16),
    letterSpacing: scale(0),
    textAlign: "center",
    marginTop: verticalScale(10),
    marginLeft: scale(110),
  },

  shadowContainer: {
    width: scale(335),
    height: verticalScale(48),
    marginHorizontal: scale(20),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#FFFFFF",
    borderWidth: scale(1),
    borderRadius: scale(6),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(10),
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#fff",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    backgroundColor: "#FFEEE4",
    width: scale(54),
    height: verticalScale(54),
    borderRadius: scale(6),
    opacity: 0.6,
  },
});
