import { useEffect, useState } from "react";
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

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";

const logoimg = require("../../assets/images/adaptive-icon.png");

export default function HomeScreen() {
  const [semodal, setsemodal] = useState(true);
  return (
    <View
      style={{
        backgroundColor: "plum",
        padding: 60,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Pressable
        onPress={() => {
          console.log("press: الضغط العادي");
        }}
      >
        <Text style={{ color: "#fff" }}>shadow</Text>
      </Pressable>
      <Pressable
        onLongPress={() => {
          console.log("press: الضغط الطويل");
        }}
      >
        <Text style={{ color: "#fff" }}>shadow</Text>
      </Pressable>
      <Pressable
        onPressOut={() => {
          console.log("press: الضغط والاكشن بعد الافلات");
        }}
      ></Pressable>
      <Pressable
        onLongPress={() => {
          console.log("shapdw");
        }}
      >
        <Image source={logoimg} style={{ width: 300, height: 300 }} />
      </Pressable> */}
      {/* <View>
        <Button
          onPress={() => {
            setsemodal(true);
          }}
          title="Click"
          color={"red"}
        />
      </View> */}
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Modal
          visible={semodal}
          transparent={true}
          animationType="slide"
          {...(Platform.OS === "ios" ? { presentationStyle: "formSheet" } : {})}
          onRequestClose={() => setsemodal(false)}
        >
          <View
            style={{
              backgroundColor: "blue",
              padding: 10,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>This is in the modal</Text>
            <Button title="Close" onPress={() => setsemodal(false)} />
          </View>
        </Modal>
      </View> */}

      {/* <Button
        onPress={() => {
          if (semodal) {
            setsemodal(false);
          } else {
            setsemodal(true);
          }
        }}
        title="Click"
        color={"red"}
      />

      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <ActivityIndicator />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"red"} />
      <ActivityIndicator size={"large"} color={"black"} animating={semodal} /> */}

      <Button title="Alert" onPress={() => Alert.alert("shadow fight")} />
      <Button title="Alert2" onPress={() => Alert.alert("shadow fight", "sahodw main")} />
    </View>

    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome fjhfj</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
