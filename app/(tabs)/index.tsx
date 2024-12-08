import { useState } from "react";
import {
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import PokemonBox from "@/components/pokemonbox/box";

export default function HomeScreen() {

const CustomButtonios = Platform.OS === "android" ? require("../../components/custombuttons/custombutton.android").default
: require("../../components/custombuttons/custombutton.ios").default;

const Arrpokemondata = [
  {
    index: 1,
    name: "Charmander",
    image: require("../../assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
    emoji: "🔥",
    colortype: "#FF5733",
  },
  {
    index: 2,
    name: "Squirtle",
    image: require("../../assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
    emoji: "💧",
    colortype: "#6493EA",
  },
  {
    index: 3,
    name: "Bulbasaur",
    image: require("../../assets/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    emoji: "🌿",
    colortype: "#66CC66",
  },
  {
    index: 4,
    name: "Pikachu",
    image: require("../../assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
    emoji: "⚡️",
    colortype: "#FFD700",
  },
];
    
  return (
      <ScrollView style={styles.container}>
        <View style={styles.main}>
          {Arrpokemondata.map((pokemon) => (
              <PokemonBox
              key={pokemon.index}
              name={pokemon.name}
              image={pokemon.image}
              type={pokemon.type}
              hp={pokemon.hp}
              moves={pokemon.moves}
              weaknesses={pokemon.weaknesses}
              emoji={pokemon.emoji}
              colortype={pokemon.colortype}
            />
          ))}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  main: {
    padding: 20,
  }
})
