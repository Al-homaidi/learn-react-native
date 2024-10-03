import { View, Text, StyleSheet } from "react-native";

type NamesProps = {
  name: string;
};

export default function Names({ name }: NamesProps) {
  return (
    <View>
      <Text style={mains.text}>Hello! {name}</Text>
    </View>
  );
}

export const mains = StyleSheet.create({
    text: {
        color: "red",
    }
})