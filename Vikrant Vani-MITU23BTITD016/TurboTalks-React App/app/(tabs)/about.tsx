import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Mail, Github, Linkedin } from 'lucide-react-native';
import React from 'react';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('../../assets/images/profile.jpeg')}
          style={styles.profileImage}
        />
        
        <Text style={styles.name}>Vikrant Vani</Text>
        <Text style={styles.title}>Automotive Journalist & Car Enthusiast</Text>
        
        <Text style={styles.bio}>
          With over 5 years of experience in automotive journalism, I've had the privilege
          of testing and reviewing hundreds of cars. My passion for automobiles goes beyond
          just writing - I'm a true enthusiast who lives and breathes car culture.
        </Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>500+</Text>
            <Text style={styles.statLabel}>Car Reviews</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5+</Text>
            <Text style={styles.statLabel}>Years Experience</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50K+</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
        </View>
        
        <View style={styles.socialLinks}>
          <View style={styles.socialItem}>
            <Mail size={24} color="#ff3b30" />
            <Text style={styles.socialText}>contact@turbo-talks.com</Text>
          </View>
          <View style={styles.socialItem}>
            <Github size={24} color="#ff3b30" />
            <Text style={styles.socialText}>@turbo-talks</Text>
          </View>
          <View style={styles.socialItem}>
            <Linkedin size={24} color="#ff3b30" />
            <Text style={styles.socialText}>Vikrant TurboTalks</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: '#ff3b30',
    marginBottom: 16,
  },
  bio: {
    fontSize: 16,
    color: '#8e8e8e',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 32,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#8e8e8e',
  },
  socialLinks: {
    width: '100%',
  },
  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  socialText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#ffffff',
  },
});