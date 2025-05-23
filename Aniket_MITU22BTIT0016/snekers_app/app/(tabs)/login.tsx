// Step-by-step: start minimal and test after every step
import { View, Text, Image } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello</Text>
      {/* Then try adding this next */}
      {/* <Image source={require('../assets/logo.png')} /> */}
    </View>
  );
}
