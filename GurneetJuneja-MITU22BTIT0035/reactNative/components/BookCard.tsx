import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Book } from '@/types';
import { Star } from 'lucide-react-native';
import { Link } from 'expo-router';

interface BookCardProps {
  book: Book;
  size?: 'small' | 'medium' | 'large';
}

export default function BookCard({ book, size = 'medium' }: BookCardProps) {
  const cardStyles = {
    small: {
      container: styles.smallContainer,
      image: styles.smallImage,
      title: styles.smallTitle,
    },
    medium: {
      container: styles.mediumContainer,
      image: styles.mediumImage,
      title: styles.mediumTitle,
    },
    large: {
      container: styles.largeContainer,
      image: styles.largeImage,
      title: styles.largeTitle,
    }
  };

  return (
    <Link href={`/book/${book.id}`} asChild>
      <TouchableOpacity style={[styles.container, cardStyles[size].container]}>
        <Image 
          source={{ uri: book.coverUrl }} 
          style={[styles.cover, cardStyles[size].image]} 
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text 
            style={[styles.title, cardStyles[size].title]} 
            numberOfLines={2}
          >
            {book.title}
          </Text>
          <Text style={styles.author} numberOfLines={1}>{book.author}</Text>
          <View style={styles.ratingContainer}>
            <Star size={12} color='#800020' fill='#800020' />
            <Text style={styles.rating}>{book.avgRating.toFixed(1)}</Text>
            <Text style={styles.ratingCount}>({book.totalRatings})</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    margin: 8,
  },
  smallContainer: {
    width: 120,
  },
  mediumContainer: {
    width: 160,
  },
  largeContainer: {
    width: 200,
  },
  cover: {
    backgroundColor: '#F5F5DC',
    overflow: 'hidden',
  },
  smallImage: {
    height: 160,
  },
  mediumImage: {
    height: 200,
  },
  largeImage: {
    height: 260,
  },
  info: {
    padding: 8,
  },
  title: {
    fontFamily: 'Merriweather-Bold',
    color: '#14213D',
  },
  smallTitle: {
    fontSize: 12,
  },
  mediumTitle: {
    fontSize: 14,
  },
  largeTitle: {
    fontSize: 16,
  },
  author: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: '#800020',
    marginLeft: 4,
  },
  ratingCount: {
    fontFamily: 'Lato-Regular',
    fontSize: 10,
    color: '#6B7280',
    marginLeft: 2,
  },
});