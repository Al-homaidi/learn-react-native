import React from "react";
import { Pressable , Text} from "react-native";

export default function CustomButtonios ({onPress, title }) {
    return (
        <Pressable onPress={onPress} style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightbloe',
            borderRadius: 20,
            padding: 10,
        }}>
            <Text style={{color: 'red', fontSize: 18}}>
                {title}
            </Text>
        </Pressable>
    );
}