import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React = require('react');
interface NewsCardProps {
  news: {
    title: string;
    excerpt: string;
    image: string;
    date: string;
  };
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image source={{ uri: news.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.date}>{news.date}</Text>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.excerpt}>{news.excerpt}</Text>
        <Text style={styles.readMore}>Read More →</Text>
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
  date: {
    fontSize: 14,
    color: '#ff3b30',
    marginBottom: 8,
  },
  title: {
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