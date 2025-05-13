import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BookOpen, Clock, Star } from 'lucide-react-native';
import React from 'react';
const tutorials = [
  {
    id: '1',
    title: 'Mastering Camera Exposure',
    image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '15 min',
    level: 'Beginner',
    description: 'Learn the fundamentals of exposure and how to properly expose your photos in any lighting condition.'
  },
  {
    id: '2',
    title: 'Portrait Photography Lighting',
    image: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '20 min',
    level: 'Intermediate',
    description: 'Master the art of portrait lighting with these easy-to-follow techniques for stunning portraits.'
  },
  {
    id: '3',
    title: 'Landscape Photography Tips',
    image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '25 min',
    level: 'Advanced',
    description: 'Capture breathtaking landscapes with these professional tips and composition techniques.'
  }
];

export default function TutorialsScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <Text style={styles.headerTitle}>Tutorials</Text>
        <Text style={styles.headerSubtitle}>Learn photography skills</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.featuredTutorial}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/3612343/pexels-photo-3612343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
            style={styles.featuredImage} 
          />
          <View style={styles.featuredContent}>
            <View style={styles.featuredBadge}>
              <Text style={styles.featuredBadgeText}>Featured</Text>
            </View>
            <Text style={styles.featuredTitle}>Complete Guide to Photography</Text>
            <Text style={styles.featuredDescription}>
              From basics to advanced techniques, this comprehensive guide covers everything you need to know about photography.
            </Text>
            <TouchableOpacity style={styles.featuredButton}>
              <Text style={styles.featuredButtonText}>Start Learning</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>Popular Tutorials</Text>
        
        {tutorials.map(tutorial => (
          <TouchableOpacity key={tutorial.id} style={styles.tutorialCard}>
            <Image source={{ uri: tutorial.image }} style={styles.tutorialImage} />
            <View style={styles.tutorialContent}>
              <Text style={styles.tutorialTitle}>{tutorial.title}</Text>
              <Text style={styles.tutorialDescription}>{tutorial.description}</Text>
              <View style={styles.tutorialMeta}>
                <View style={styles.metaItem}>
                  <Clock size={16} color="#666666" />
                  <Text style={styles.metaText}>{tutorial.duration}</Text>
                </View>
                <View style={styles.metaItem}>
                  <BookOpen size={16} color="#666666" />
                  <Text style={styles.metaText}>{tutorial.level}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#121212',
    padding: 16,
    paddingBottom: 24,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: '#E0E0E0',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginTop: 2,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  featuredTutorial: {
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F9F9F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featuredImage: {
    width: '100%',
    height: 180,
  },
  featuredContent: {
    padding: 16,
  },
  featuredBadge: {
    backgroundColor: '#FFCB45',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  featuredBadgeText: {
    color: '#121212',
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
  featuredTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#121212',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: '#454545',
    lineHeight: 22,
    marginBottom: 16,
  },
  featuredButton: {
    backgroundColor: '#121212',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  featuredButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#121212',
    marginBottom: 16,
  },
  tutorialCard: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  tutorialImage: {
    width: 100,
    height: '100%',
  },
  tutorialContent: {
    flex: 1,
    padding: 12,
  },
  tutorialTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#121212',
    marginBottom: 4,
  },
  tutorialDescription: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    color: '#666666',
    marginBottom: 8,
  },
  tutorialMeta: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: '#666666',
    marginLeft: 4,
  },
});