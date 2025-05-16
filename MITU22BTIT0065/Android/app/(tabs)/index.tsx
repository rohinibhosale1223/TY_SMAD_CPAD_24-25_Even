import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <View style={styles.headerContent}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
            style={styles.logo} 
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>OneShot</Text>
            <Text style={styles.subtitle}>Your go-to Photography Blog</Text>
          </View>
        </View>
      </View>
      
      <ScrollView style={styles.contentContainer}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome to OneShot</Text>
          <Text style={styles.welcomeDescription}>
            Explore the world through the lens. Discover stunning photography, learn new techniques, and be part of our vibrant community.
          </Text>
          
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Start your photographic journey today!</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Photos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photoScroll}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
              style={styles.featuredPhoto} 
            />
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
              style={styles.featuredPhoto} 
            />
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
              style={styles.featuredPhoto} 
            />
          </ScrollView>
        </View>
        
        <View style={styles.latestSection}>
          <Text style={styles.sectionTitle}>Latest Articles</Text>
          <TouchableOpacity style={styles.articleCard}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
              style={styles.articleImage} 
            />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>Mastering Natural Light</Text>
              <Text style={styles.articleExcerpt}>Learn how to use natural light to create stunning portraits in any condition.</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.articleCard}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
              style={styles.articleImage} 
            />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>Travel Photography Tips</Text>
              <Text style={styles.articleExcerpt}>Essential tips and gear recommendations for your next photography adventure.</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 0.5,
  },
  subtitle: {
    color: '#E0E0E0',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginTop: 2,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  welcomeSection: {
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: '#121212',
    marginBottom: 12,
  },
  welcomeDescription: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#454545',
    lineHeight: 24,
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#FFCB45',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  ctaButtonText: {
    color: '#121212',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  featuredSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#121212',
    marginBottom: 16,
  },
  photoScroll: {
    flexDirection: 'row',
    marginHorizontal: -5,
  },
  featuredPhoto: {
    width: 200,
    height: 150,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  latestSection: {
    marginBottom: 30,
  },
  articleCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  articleImage: {
    width: '100%',
    height: 180,
  },
  articleContent: {
    padding: 16,
  },
  articleTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#121212',
    marginBottom: 8,
  },
  articleExcerpt: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#454545',
    lineHeight: 20,
  },
});