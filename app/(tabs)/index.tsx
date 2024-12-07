import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
export default function HomeScreen() {
  const [text, setText] = useState("shadow");

  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      <Text id="main" style={[style.conm, {fontWeight: 'bold'}]}>{text}</Text>
      <ActivityIndicator size="large" color="red" />

      <Button
        title="Alert"
        onPress={() => {
          Alert.alert("Mohammed Al-homidi", "I am the Eng man yoooooooo", [
            {
              text: "Cancel",
              onPress: () => {
                setText("Not nice!");
              },
            },
            {
              text: "Ok",
              onPress: () => {
                setText("You're a good man");
              },
            },
          ]);
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  conm: {
    backgroundColor: 'red',
    fontSize: 40,
  },
})
>>>>>>> 9eed71905dc744ec98fcc1c6f4ba1e08271dc3dc
