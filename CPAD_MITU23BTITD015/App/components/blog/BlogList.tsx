import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Clock, MessageSquare, ThumbsUp } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import React from 'react';

const blogPosts = [
  {
    id: '1',
    title: 'The Future of AI: How Machine Learning is Changing the Technology Landscape',
    excerpt: 'From chatbots to predictive analytics, AI is transforming how we interact with technology.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    date: 'May 15, 2025',
    readTime: '8 min read',
    likes: 342,
    comments: 28,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg',
    },
    category: 'AI',
  },
  {
    id: '2',
    title: 'Web3 Development: Building the Decentralized Future',
    excerpt: 'A deep dive into the technologies powering the next generation of web applications.',
    image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
    date: 'May 14, 2025',
    readTime: '10 min read',
    likes: 256,
    comments: 42,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
    category: 'Web Dev',
  },
  {
    id: '3',
    title: 'Review: The Latest Flagship Smartphones Compared',
    excerpt: 'We compare the newest flagship phones to help you decide which is right for you.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    date: 'May 12, 2025',
    readTime: '6 min read',
    likes: 189,
    comments: 35,
    author: {
      name: 'Jessica Williams',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    category: 'Reviews',
  },
  {
    id: '4',
    title: 'Getting Started with Quantum Computing',
    excerpt: 'A beginner-friendly introduction to quantum computing principles and applications.',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
    date: 'May 10, 2025',
    readTime: '12 min read',
    likes: 278,
    comments: 19,
    author: {
      name: 'Robert Garcia',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    },
    category: 'Tutorials',
  },
];

export default function BlogList() {
  return (
    <View style={styles.container}>
      {blogPosts.map((post) => (
        <TouchableOpacity key={post.id} style={styles.blogCard}>
          <Image source={{ uri: post.image }} style={styles.blogImage} resizeMode="cover" />
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{post.category}</Text>
          </View>
          <View style={styles.blogContent}>
            <Text style={styles.blogTitle}>{post.title}</Text>
            <Text style={styles.blogExcerpt} numberOfLines={2}>
              {post.excerpt}
            </Text>
            
            <View style={styles.metaContainer}>
              <View style={styles.authorContainer}>
                <Image source={{ uri: post.author.avatar }} style={styles.authorImage} />
                <Text style={styles.authorName}>{post.author.name}</Text>
              </View>
              
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <ThumbsUp size={14} color={Colors.neutral[600]} />
                  <Text style={styles.statText}>{post.likes}</Text>
                </View>
                <View style={styles.statItem}>
                  <MessageSquare size={14} color={Colors.neutral[600]} />
                  <Text style={styles.statText}>{post.comments}</Text>
                </View>
                <View style={styles.statItem}>
                  <Clock size={14} color={Colors.neutral[600]} />
                  <Text style={styles.statText}>{post.readTime}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.lg,
  },
  blogCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  blogImage: {
    width: '100%',
    height: 180,
  },
  categoryBadge: {
    position: 'absolute',
    top: Spacing.md,
    left: Spacing.md,
    backgroundColor: Colors.primary[500],
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Colors.white,
  },
  blogContent: {
    padding: Spacing.md,
  },
  blogTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: Colors.neutral[800],
    marginBottom: Spacing.sm,
    lineHeight: 24,
  },
  blogExcerpt: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.neutral[600],
    marginBottom: Spacing.md,
    lineHeight: 20,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
    paddingTop: Spacing.sm,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: Spacing.xs,
  },
  authorName: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Colors.neutral[700],
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.neutral[600],
  },
});