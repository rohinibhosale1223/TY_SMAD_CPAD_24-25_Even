import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme, Dimensions } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import React = require('react');
const { width } = Dimensions.get('window');
const cardWidth = width > 500 ? (width - 64) / 2 : width - 32;

export function FeaturedContent() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  const featuredItems = [
    {
      id: '1',
      title: 'Trending Cars',
      description: 'Explore what\'s hot in the car world right now. Showcase currently popular or most viewed cars on the platform.',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '2',
      title: 'Expert Picks',
      description: 'Top recommendations from automotive experts. Highlight editor\'s choice vehicles or staff-curated content.',
      image: 'https://images.pexels.com/photos/8052843/pexels-photo-8052843.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
          Featured
        </Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View all</Text>
          <ArrowRight size={16} color="#228be6" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardsContainer}>
        {featuredItems.map(item => (
          <TouchableOpacity 
            key={item.id}
            style={[
              styles.card, 
              isDark && styles.darkCard,
              { width: cardWidth }
            ]}
            activeOpacity={0.9}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={[styles.cardTitle, isDark && styles.darkText]}>
                {item.title}
              </Text>
              <Text style={styles.cardDescription}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212529',
  },
  darkText: {
    color: '#f8f9fa',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: '#228be6',
    marginRight: 4,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
    overflow: 'hidden',
  },
  darkCard: {
    backgroundColor: '#212529',
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6c757d',
    lineHeight: 20,
  },
});