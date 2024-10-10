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
  Dimensions,
} from "react-native";

export default function HomeScreen() {

  const [deshadow, setdeshadow] = useState({
    window: Dimensions.get("window"),
  });
  console.log(deshadow)

  useEffect(() => {
    // عند تغيير أبعاد الشاشة، يتم تحديث قيم الأبعاد في state
    const handleDimensionChange = ({ window }) => {
      setdeshadow({ window });
    };
    
    const shaodwfight = Dimensions.addEventListener("change", handleDimensionChange);

    return () => shaodwfight?.remove(); // إزالة المستمع عند انتهاء الاستخدام
  }, []);

  // استخدام deshadow.window بدلاً من window مباشرة
  const windowwidth = deshadow.window.width;
  const windowheight = deshadow.window.height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowwidth > 500 ? "70%" : "90%",
            height: windowheight > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text style={[styles.text, { fontSize: windowwidth > 500 ? 50 : 24, color:  windowwidth > 500 ? "red" : "black" }]}>
          SHADOW
        </Text>
      </View>
    </View>

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
  container: {
    flex: 1,
    backgroundColor: "blue", // تم تصحيح اللون إلى "blue"
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
  boxshadow: {
    shadowColor: "red",
    shadowOpacity: 0.7,
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 4,
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
