import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Star } from 'lucide-react-native';
import React = require('react');
interface ReviewCardProps {
  review: {
    carName: string;
    rating: number;
    excerpt: string;
    image: string;
  };
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image source={{ uri: review.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.ratingContainer}>
          <Star size={16} color="#ff3b30" fill="#ff3b30" />
          <Text style={styles.rating}>{review.rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.carName}>{review.carName}</Text>
        <Text style={styles.excerpt}>{review.excerpt}</Text>
        <Text style={styles.readMore}>Read Full Review →</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: '#ff3b30',
    marginLeft: 4,
    fontWeight: '600',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  excerpt: {
    fontSize: 16,
    color: '#8e8e8e',
    marginBottom: 16,
  },
  readMore: {
    fontSize: 16,
    color: '#ff3b30',
    fontWeight: '600',
  },
});