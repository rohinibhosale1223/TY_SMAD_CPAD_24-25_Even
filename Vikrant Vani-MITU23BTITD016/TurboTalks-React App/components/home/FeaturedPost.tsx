import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React = require('react');
export function FeaturedPost() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Featured Post</Text>
      
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg' }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.tag}>Featured</Text>
          <Text style={styles.title}>The Future of Electric Supercars</Text>
          <Text style={styles.excerpt}>
            Exploring how electric powertrains are revolutionizing the supercar segment...
          </Text>
          <Text style={styles.readMore}>Read More →</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  tag: {
    color: '#ff3b30',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
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