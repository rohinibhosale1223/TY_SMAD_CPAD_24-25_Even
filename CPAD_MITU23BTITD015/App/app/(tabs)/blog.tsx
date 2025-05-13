import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import CategoryList from '@/components/blog/CategoryList';
import BlogList from '@/components/blog/BlogList';
import React from 'react';
export default function BlogScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tech Blog</Text>
        <Text style={styles.headerSubtitle}>Stay updated with latest tech trends</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={Colors.neutral[500]} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search articles..."
            placeholderTextColor={Colors.neutral[500]}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <CategoryList />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <BlogList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.neutral[800],
    marginBottom: Spacing.xs,
  },
  headerSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.neutral[600],
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    gap: Spacing.sm,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.neutral[100],
    borderRadius: 8,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    marginLeft: Spacing.sm,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.neutral[800],
  },
  filterButton: {
    backgroundColor: Colors.primary[500],
    borderRadius: 8,
    padding: Spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: Spacing.xxl,
  },
});