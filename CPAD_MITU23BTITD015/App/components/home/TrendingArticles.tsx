import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ArrowUpRight } from 'lucide-react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import React from 'react';
const trendingArticles = [
  {
    id: '1',
    title: 'The Impact of 5G on Future Technologies',
    excerpt: 'How 5G is revolutionizing various industries and what to expect in the coming years.',
    date: 'May 12, 2025',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
  },
  {
    id: '2',
    title: 'Cybersecurity Trends for 2025',
    excerpt: 'The evolving landscape of cybersecurity threats and how to stay protected.',
    date: 'May 10, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
  },
  {
    id: '3',
    title: 'The Rise of Quantum Computing',
    excerpt: 'Understanding quantum computing and its potential impact on computing power.',
    date: 'May 8, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
  },
];

export default function TrendingArticles() {
  return (
    <View style={styles.container}>
      {trendingArticles.map((article, index) => (
        <Animated.View 
          key={article.id}
          entering={FadeInRight.delay(index * 100).duration(400)}
        >
          <TouchableOpacity style={styles.articleCard}>
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleExcerpt} numberOfLines={2}>
                {article.excerpt}
              </Text>
              <View style={styles.articleMeta}>
                <Text style={styles.articleDate}>{article.date}</Text>
                <Text style={styles.articleDot}>•</Text>
                <Text style={styles.articleReadTime}>{article.readTime}</Text>
              </View>
            </View>
            <View style={styles.articleImageContainer}>
              <Image 
                source={{ uri: article.image }} 
                style={styles.articleImage}
                resizeMode="cover"
              />
              <View style={styles.articleIconContainer}>
                <ArrowUpRight size={16} color={Colors.white} />
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },
  articleCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  articleContent: {
    flex: 1,
    padding: Spacing.md,
  },
  articleTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.neutral[800],
    marginBottom: Spacing.xs,
  },
  articleExcerpt: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    marginBottom: Spacing.sm,
    lineHeight: 20,
  },
  articleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.neutral[500],
  },
  articleDot: {
    marginHorizontal: Spacing.xs,
    fontSize: 12,
    color: Colors.neutral[500],
  },
  articleReadTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.neutral[500],
  },
  articleImageContainer: {
    width: 100,
    position: 'relative',
  },
  articleImage: {
    width: '100%',
    height: '100%',
  },
  articleIconContainer: {
    position: 'absolute',
    top: Spacing.xs,
    right: Spacing.xs,
    backgroundColor: Colors.primary[500],
    borderRadius: 16,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});