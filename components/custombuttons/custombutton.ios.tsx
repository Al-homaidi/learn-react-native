import React from "react";
import { Pressable , Text} from "react-native";

export default function CustomButtonandroid ({onPress, title }) {
    return (
        <Pressable onPress={onPress} style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            borderRadius: 5,
            padding: 15,
        }}>
            <Text style={{color: 'white', fontSize: 13, }}>
                {title}
            </Text>
        </Pressable>
    );
}