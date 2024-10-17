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
import CustomButtonioc from "../../components/custombuttons/custombutton.ico";
import CustomButtonandroid from "../../components/custombuttons/custombutton.android";

// https://uiverse.io/Li-Deheng/sweet-liger-88

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Shadow
        </Text>
        {Platform.OS == 'android' ? <CustomButtonandroid title={'clcik me'} onPress={() => {alert('i love you')}} /> : <CustomButtonioc title={'clcik me'} onPress={() => {alert('i love you')}} />}
      </View>
    </SafeAreaView>

    // كود مكمت (غير مفعّل) يستخدم لإضافة ميزات أخرى لاحقًا مثل ParallaxScrollView
    // <ParallaxScrollView
    //   headerbackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
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
  safecontainer: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: Platform.OS === 'android' ? 210 : 0,
  },
  box: {
    backgroundColor: "lightblue",

    justifyContent: "center",
  },
  text: {
    ...Platform.select({
      ios: {
        textAlign: "center",
        padding: 20,
        fontSize: 20,
        color: 'red',
        fontStyle: 'italic',
      },
      android: {
        textAlign: "center",
        padding: 20,
        fontSize: 20,
        color: "yellow",
      }
    })
  },
  boxshadow: {
    shadowColor: "red",
  
  },
  andeoudshadow: {
    elevation: 20,
  },
  size: {
    // borderRadius: 34,
    fontSize: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 50,
    // backgroundColor: 'black',
    // padding: 10,
  },
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
