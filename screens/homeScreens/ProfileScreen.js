import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import {
  scale,
  verticalScale,
} from "../../components/responsiveness/Responsive";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

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
            <Ionicons size={24} style={styles.backBtn} name="chevron-back" />
          </TouchableOpacity>

          <Text style={styles.text} className="font-poppins-semiBold">
            Profile
          </Text>
        </View>

        <View style={styles.container}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>No image selected</Text>
            </View>
          )}

          <TouchableOpacity onPress={pickImage} style={styles.button}>
            <Text style={styles.buttonText}>Upload Profile Image</Text>
          </TouchableOpacity>
        </View>
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
  container: {
    alignItems: "center",
    marginTop: verticalScale(40),
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: verticalScale(20),
  },
  placeholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: verticalScale(20),
  },
  placeholderText: {
    color: "#888",
  },
  button: {
    backgroundColor: "#2E7D32",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(30),
    borderRadius: scale(8),
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
