import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ScannerScreen from "../screens/homeScreens/ScannerScreen";
import HistoryScreen from "../screens/homeScreens/HistoryScreen";
import ProfileScreen from "../screens/homeScreens/ProfileScreen";
import { View } from "react-native";
import { scale, verticalScale } from "../components/responsiveness/Responsive";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Scanner"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: scale(336),
          height: verticalScale(67),
          backgroundColor: "#000", // black background
          marginTop: verticalScale(43),
          marginBottom: verticalScale(34),
          marginHorizontal: scale(20),
          borderRadius: scale(6),
          paddingHorizontal: scale(15),
          elevation: 6,
        },
        tabBarActiveTintColor: "#F5F5DC",
        tabBarInactiveTintColor: "#F5F5DC",
        tabBarLabelStyle: {
          fontFamily: "poppins-400regular",
          fontSize: scale(17),
          color: "#F5F5DC",
          lineHeight: verticalScale(17),
          letterSpacing: scale(0.1),
          textAlign: "center",
          marginTop: verticalScale(5),
        },
      }}
    >
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "time" : "time-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarLabel: () => null, // ❌ hide label
          tabBarIcon: () => (
            <View
              style={{
                width: scale(70),
                height: verticalScale(70),
                backgroundColor: "#2E7D32",
                borderRadius: scale(70),
                justifyContent: "center",
                alignItems: "center",
                marginBottom: verticalScale(40),
              }}
            >
              <Ionicons name="scan-outline" size={32} color="#fff" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
