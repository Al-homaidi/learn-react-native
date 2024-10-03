import { Image, StyleSheet, Platform, View,Text, ImageBackground, ScrollView, Button} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const logoimg = require('../../assets/images/adaptive-icon.png') 

export default function HomeScreen() {
  return (

    <View style={{backgroundColor: 'plum', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: '#fff'}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nihil, est quibusdam soluta ab cum, architecto dolorem natus, quo temporibus incidunt. Qui id perspiciatis est sequi magni vitae molestiae fugit.
        </Text>
        <Image source={logoimg} style={{width: 300, paddingTop: 60, paddingBottom: 160 , height: 300}}/>
        <Image source={{ uri: 'https://picsum.photos/300' }} style={{ width: 300, height: 300 }} />
        <Image source={logoimg} style={{width: 300, height: 300}}/>
        <Image source={logoimg} style={{width: 300, height: 300}}/>
        <Text style={{color: '#fff'}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nihil, est quibusdam soluta ab cum, architecto dolorem natus, quo temporibus incidunt. Qui id perspiciatis est sequi magni vitae molestiae fugit.
        </Text>
        <View>
        <Button title="Submit" onPress={() => {
          console.log('sahdow');
        }}/>
        </View>
      </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
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
    position: 'absolute',
  },
});
