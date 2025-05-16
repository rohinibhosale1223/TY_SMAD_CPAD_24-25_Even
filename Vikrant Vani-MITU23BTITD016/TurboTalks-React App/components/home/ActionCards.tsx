import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { BookOpen, CarFront, FileText, Search, Send, Star, Upload, Users } from 'lucide-react-native';
import React = require('react');
import { useRouter } from 'expo-router';

export function ActionCards() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const router = useRouter();
  
  const actions = [
    {
      id: '1',
      title: 'Latest Reviews',
      description: 'Instantly view the most recent car reviews and ratings.',
      icon: <CarFront size={24} color="#4c6ef5" />,
      backgroundColor: '#edf2ff',
      textColor: '#4c6ef5',
      onPress: () => router.push('/news'),
    },
    {
      id: '2',
      title: 'Search Cars',
      description: 'Quickly search for car models, brands, or specs.',
      icon: <Search size={24} color="#37b24d" />,
      backgroundColor: '#ebfbee',
      textColor: '#37b24d',
      onPress: () => router.push('/galleries'),
    },
    {
      id: '3',
      title: 'Top Rated',
      description: 'Browse the highest-rated cars across all categories.',
      icon: <Star size={24} color="#f76707" />,
      backgroundColor: '#fff4e6',
      textColor: '#f76707',
      onPress: () => router.push('/reviews'),
    },
    {
      id: '4',
      title: 'Submit a Review',
      description: 'Let users post their own car experiences and ratings.',
      icon: <Send size={24} color="#ae3ec9" />,
      backgroundColor: '#f3d9fa',
      textColor: '#ae3ec9',
      onPress: () => router.push('/reviews'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
        Quick Actions
      </Text>
      
      <View style={styles.grid}>
        {actions.map(action => (
          <TouchableOpacity 
            key={action.id}
            style={[
              styles.card, 
              { backgroundColor: isDark ? '#212529' : action.backgroundColor }
            ]}
            activeOpacity={0.8}
            onPress={action.onPress}
          >
            <View style={styles.iconContainer}>
              {action.icon}
            </View>
            <Text 
              style={[
                styles.cardTitle,
                { color: isDark ? '#f8f9fa' : action.textColor }
              ]}
            >
              {action.title}
            </Text>
            <Text style={styles.cardDescription}>
              {action.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 16,
  },
  darkText: {
    color: '#f8f9fa',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  iconContainer: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6c757d',
  },
});