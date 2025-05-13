import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ReviewCard } from '@/components/reviews/ReviewCard';
import React from 'react';
const reviewsData = [
  {
    id: '1',
    carName: '2024 Ferrari 296 GTB',
    rating: 4.8,
    excerpt: 'A plug-in hybrid supercar that blends electrification with raw Ferrari thrill…',
    image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg',
  },
  {
    id: '2',
    carName: '2024 Lamborghini Revuelto',
    rating: 4.5,
    excerpt: 'Lamborghini’s first V12 hybrid delivers insane power and signature drama…',
    image: 'https://images.pexels.com/photos/16170477/pexels-photo-16170477/free-photo-of-modern-red-sports-car.jpeg',
  },
  {
    id: '3',
    carName: '2024 Audi RS6 Avant Performance',
    rating: 4.7,
    excerpt: 'This wagon defies expectations with blistering speed and everyday usability…',
    image: 'https://images.pexels.com/photos/19368036/pexels-photo-19368036/free-photo-of-back-view-of-audi-rs6.png',
  },
  {
    id: '4',
    carName: '2024 Aston Martin DB12',
    rating: 4.6,
    excerpt: 'Luxury meets aggression in this beautiful evolution of the DB series…',
    image: 'https://images.pexels.com/photos/8190663/pexels-photo-8190663.jpeg',
  },
  {
    id: '5',
    carName: '2024 Corvette Z06',
    rating: 4.8,
    excerpt: 'America’s mid-engine marvel pushes boundaries with a screaming flat-plane V8…',
    image: 'https://images.pexels.com/photos/17653620/pexels-photo-17653620/free-photo-of-chevrolet-corvette-z06.jpeg',
  },
];

export default function ReviewsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={reviewsData}
        renderItem={({ item }) => <ReviewCard review={item} />}
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