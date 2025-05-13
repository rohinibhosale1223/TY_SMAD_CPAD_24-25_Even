import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const { width } = Dimensions.get('window');
const imageSize = (width - 48) / 2;

const galleryData = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
  },
  {
    id: '3',
    image: 'https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/mclaren-750s-static-rear-1280x720px.ashx',
  },
  {
    id: '4',
    image: 'https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/porsche-911-gt3-rs-on-nurburgring-1280x720px.ashx',
  },  
  {
    id: '5',
    image: 'https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/lamborghini-revuelto-orange-static-1920x720px.ashx',
  },
  {
    id: '6',
    image: 'https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/ferrari-296-gtb-red-driving-dynamic-1280x720px.ashx',
  },
  {
    id: '7',
    image: 'https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/maserati-mc20-doors-up-1280x720px.ashx',
  },
  {
    id: '8',
    image: 'https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/lamborghini-huracan-technica-dramatic-1280x720px.ashx',
  },
  {
    id: '9',
    image: 'https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/mclaren-artura-static-front-1280x720px.ashx',
  },
  {
    id: '10',
    image: 'https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/audi-r8-v10-dynamic-red-1280x720px.ashx',
  },
  
];
export default function GalleriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={galleryData}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  listContent: {
    padding: 16,
  },
  imageContainer: {
    padding: 8,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 12,
  },
});