import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import React from 'react';
const { width } = Dimensions.get('window');
const CARD_WIDTH = width - Spacing.lg * 2;
const CARD_HEIGHT = 200;

type FeaturedCarouselProps = {
  isLoaded: boolean;
};

const featuredItems = [
  {
    id: '1',
    title: 'The Future of AI in 2025',
    category: 'Artificial Intelligence',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
  },
  {
    id: '2',
    title: 'Latest Apple MacBook Pro Review',
    category: 'Product Reviews',
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg',
  },
  {
    id: '3',
    title: 'Blockchain Revolution in Finance',
    category: 'Blockchain',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
  },
];

export default function FeaturedCarousel({ isLoaded }: FeaturedCarouselProps) {
  if (!isLoaded) {
    return (
      <View style={[styles.card, styles.loadingCard]}>
        <View style={styles.loadingIndicator} />
      </View>
    );
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={CARD_WIDTH + Spacing.md}
      contentContainerStyle={styles.scrollContentContainer}
    >
      {featuredItems.map((item, index) => (
        <Animated.View 
          key={item.id} 
          style={styles.cardContainer}
          entering={FadeIn.delay(index * 200)}
        >
          <TouchableOpacity style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardOverlay} />
            <View style={styles.cardContent}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.readMoreContainer}>
                <Text style={styles.readMoreText}>Read More</Text>
                <ChevronRight size={16} color={Colors.white} />
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    paddingRight: Spacing.lg,
  },
  cardContainer: {
    width: CARD_WIDTH,
    marginRight: Spacing.md,
  },
  card: {
    height: CARD_HEIGHT,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Colors.neutral[300],
  },
  loadingCard: {
    backgroundColor: Colors.neutral[200],
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingIndicator: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: Colors.neutral[300],
    borderTopColor: Colors.primary[500],
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 12,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.md,
  },
  categoryBadge: {
    backgroundColor: Colors.accent[500],
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: Spacing.sm,
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Colors.white,
  },
  cardTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: Colors.white,
    marginBottom: Spacing.sm,
  },
  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.white,
    marginRight: 2,
  },
});