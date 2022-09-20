import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {

  const widthAnim = useRef(new Animated.Value(0)).current;
  // const fontSizeAnim = useRef(new Animated.Value(0)).current;

  const runAnim = ()=>{

    Animated.timing(widthAnim,{
      toValue: 100,
      duration: 3000,
      useNativeDriver: false
    }).start();

    // Animated.sequence([
    //   Animated.timing(widthAnim,{
    //     toValue: 300,
    //     duration: 3000,
    //     useNativeDriver: false
    //   }),
    //   Animated.timing(fontSizeAnim,{
    //     toValue: 40,
    //     duration: 3000,
    //     useNativeDriver: false
    //   })
    // ]).start();
  }

  return (
    <View style={styles.container}>
      <Animated.Text 
        style={[styles.text, {
          width:widthAnim, 
          height: widthAnim.interpolate({inputRange: [0,100], outputRange:['0%', '30%']}) 
        }]}>Hello</Animated.Text>
      <Button title="RUN" onPress={runAnim}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    backgroundColor: "beige",
    height: 50

  }
});
