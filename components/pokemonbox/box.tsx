import { View, Text, Image, StyleSheet, Platform } from "react-native";
export default function PokemonBox ({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses,
    emoji,
    colortype,
}) {
    return(
        <View style={styles.box}>

            <View style={styles.item}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️HP: {hp}</Text>
            </View>

            <View style={styles.containerImage}>
                <Image style={styles.imgae} source={image} accessibilityLabel={`${name} Pocemon`} />
                <View style={[styles.contype, {borderColor: colortype}]}>
                    <Text style={styles.contypetext}>{emoji}</Text>
                    <Text style={styles.contypetext}>{type}</Text>
                </View>
            </View>


            <View style={styles.Moves}>
                <Text style={styles.Movestext}>Moves: {moves.join(", ")}</Text>
            </View>
            <View>
                <Text style={styles.weaknessestext}>weaknesses: {weaknesses.join(", ")}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "white",
        padding: 16,
        margin: 16,
        borderRadius: 16,
        borderWidth: 2,
        ...Platform.select({
            ios: {
                sahdowOffset: {width: 2,height: 2},
                sahdowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        })
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingBottom: 20,
    },
    containerImage: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        paddingBottom: 25,
    },
    imgae: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 16,
        fontWeight: "500",
    },
    contype: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderWidth: 2,
        borderRadius: 15,
    },
    contypetext: {
        fontSize: 20,
        fontWeight: "bold",
    },
    Moves: {
        paddingBottom: 10,
    },
    Movestext: {
        fontSize: 18,
        fontWeight: "bold",
    },
    weaknessestext: {
        fontSize: 18,
        fontWeight: "bold",
    },
})