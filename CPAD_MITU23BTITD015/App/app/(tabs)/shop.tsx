import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, SlidersHorizontal } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import ProductGrid from '@/components/shop/ProductGrid';
import ShopCategories from '@/components/shop/ShopCategories';
import React from 'react';
export default function ShopScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tech Shop</Text>
        <Text style={styles.headerSubtitle}>Find the best tech gadgets</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={Colors.neutral[500]} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor={Colors.neutral[500]}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <SlidersHorizontal size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <ShopCategories />

      <ProductGrid />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
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
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
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
});