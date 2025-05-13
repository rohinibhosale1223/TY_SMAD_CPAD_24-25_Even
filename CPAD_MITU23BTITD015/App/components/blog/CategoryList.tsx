import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import React from 'react';
const categories = [
  { id: 'all', name: 'All' },
  { id: 'ai', name: 'AI' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'web', name: 'Web Dev' },
  { id: 'gadgets', name: 'Gadgets' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'reviews', name: 'Reviews' },
  { id: 'tutorials', name: 'Tutorials' },
];

export default function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContentContainer}
      style={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryButton,
            selectedCategory === category.id && styles.selectedCategoryButton,
          ]}
          onPress={() => setSelectedCategory(category.id)}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category.id && styles.selectedCategoryText,
            ]}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  scrollContentContainer: {
    paddingVertical: Spacing.sm,
  },
  categoryButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 20,
    marginRight: Spacing.sm,
    backgroundColor: Colors.neutral[100],
  },
  selectedCategoryButton: {
    backgroundColor: Colors.primary[500],
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.neutral[700],
  },
  selectedCategoryText: {
    color: Colors.white,
  },
});