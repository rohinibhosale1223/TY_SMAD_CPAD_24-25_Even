import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NewsCard } from '@/components/news/NewsCard';
import React from 'react';
const newsData = [
  {
    id: '1',
    title: 'Tesla Unveils Next-Gen Roadster',
    excerpt: 'The new Tesla Roadster promises unprecedented performance...',
    image: 'https://images.pexels.com/photos/14674136/pexels-photo-14674136.jpeg',
    date: '2024-03-15',
  },
  {
    id: '2',
    title: 'BMWs Electric Future',
    excerpt: 'BMW announces ambitious plans for electric vehicle lineup...',
    image: 'https://images.pexels.com/photos/20706243/pexels-photo-20706243/free-photo-of-a-car-at-sunset.jpeg',
    date: '2024-03-14',
  },
  {
    id: '3',
    title: 'Toyota Launches All-Electric Land Cruiser',
    excerpt: 'The iconic SUV gets a modern twist with zero-emission capabilities…',
    image: 'https://images.pexels.com/photos/30698575/pexels-photo-30698575/free-photo-of-suv-in-the-desert-sands-of-qatar.jpeg',
    date: '2024-04-10',
  },
  {
    id: '4',
    title: 'Ford Mustang Mach-E GT Hits Indian Market',
    excerpt: 'The performance EV brings American muscle to electric enthusiasts in India…',
    image: 'https://images.pexels.com/photos/10905505/pexels-photo-10905505.jpeg',
    date: '2024-03-12',
  },
  {
    id: '5',
    title: 'Porsche Unveils 2025 Taycan Turbo S',
    excerpt: 'With improved range and faster charging, the new Taycan sets fresh benchmarks…',
    image: 'https://images.pexels.com/photos/30749352/pexels-photo-30749352/free-photo-of-modern-police-car-in-istanbul-street-scene.jpeg',
    date: '2024-03-11',
  },
  {
    id: '6',
    title: 'Mercedes-Benz Unveils New S-Class',
    excerpt: 'Mercedes-Benz introduces the latest S-Class with cutting-edge technology...',
    image: 'https://images.pexels.com/photos/17115626/pexels-photo-17115626/free-photo-of-black-mercedes-s-class.jpeg',
    date: '2024-03-10',
  },
  {
    id: '7',
    title: 'Hyundai Teases Ioniq 8 SUV',
    excerpt: 'This futuristic electric SUV boasts over 600 km of range on a single charge…',
    image: 'https://images.pexels.com/photos/11952741/pexels-photo-11952741.jpeg',
    date: '2024-03-09',
  },
  {
    id: '8',
    title: 'Mercedes-Benz EQG Nears Production',
    excerpt: 'The electric G-Wagon retains iconic ruggedness with a silent powertrain…',
    image: 'https://images.pexels.com/photos/9927973/pexels-photo-9927973.jpeg',
    date: '2024-03-08',
  },
  {
    id: '9',
    title: 'Rimac Nevera Breaks Nürburgring EV Record',
    excerpt: 'Croatia’s electric hypercar sets new standards for track performance…',
    image: 'https://images.pexels.com/photos/29410854/pexels-photo-29410854/free-photo-of-luxury-electric-sports-car-on-display.jpeg',
    date: '2024-03-07',
  },
  {
    id: '10',
    title: 'Kia EV9 Officially Launched Globally',
    excerpt: 'Kia’s flagship electric SUV brings bold design and family-first features…',
    image: 'https://images.pexels.com/photos/31212857/pexels-photo-31212857/free-photo-of-kia-ev9-gt-line-electric-car-on-sandy-beach.jpeg',
    date: '2024-03-06',
  },
  
];

export default function NewsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsCard news={item} />}
        keyExtractor={item => item.id}
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
});