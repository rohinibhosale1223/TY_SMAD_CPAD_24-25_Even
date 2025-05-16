import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Laptop, Smartphone, Monitor, Headphones, Camera, Gamepad, Watch, PenTool } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import React from 'react';

const categories = [
  { id: 'all', name: 'All', icon: null },
  { id: 'laptops', name: 'Laptops', icon: <Laptop size={24} color={Colors.neutral[700]} /> },
  { id: 'phones', name: 'Phones', icon: <Smartphone size={24} color={Colors.neutral[700]} /> },
  { id: 'monitors', name: 'Monitors', icon: <Monitor size={24} color={Colors.neutral[700]} /> },
  { id: 'audio', name: 'Audio', icon: <Headphones size={24} color={Colors.neutral[700]} /> },
  { id: 'cameras', name: 'Cameras', icon: <Camera size={24} color={Colors.neutral[700]} /> },
  { id: 'gaming', name: 'Gaming', icon: <Gamepad size={24} color={Colors.neutral[700]} /> },
  { id: 'wearables', name: 'Wearables', icon: <Watch size={24} color={Colors.neutral[700]} /> },
  { id: 'accessories', name: 'Accessories', icon: <PenTool size={24} color={Colors.neutral[700]} /> },
];

export default function ShopCategories() {
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
          {category.icon && (
            <View style={[
              styles.iconContainer,
              selectedCategory === category.id && styles.selectedIconContainer,
            ]}>
              {category.icon}
            </View>
          )}
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
    marginVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  scrollContentContainer: {
    paddingVertical: Spacing.sm,
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: Spacing.lg,
    opacity: 0.7,
  },
  selectedCategoryButton: {
    opacity: 1,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.neutral[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.xs,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  selectedIconContainer: {
    backgroundColor: Colors.primary[50],
    borderColor: Colors.primary[500],
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.neutral[700],
  },
  selectedCategoryText: {
    color: Colors.primary[500],
    fontFamily: 'Inter-Bold',
  },
});