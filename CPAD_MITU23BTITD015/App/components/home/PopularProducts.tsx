import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { ShoppingCart, Star } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import React from 'react';
const popularProducts = [
  {
    id: '1',
    name: 'Wireless Earbuds Pro',
    price: 129.99,
    rating: 4.8,
    reviewCount: 245,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
  },
  {
    id: '2',
    name: 'Smart Watch Series 7',
    price: 349.99,
    rating: 4.7,
    reviewCount: 182,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
  },
  {
    id: '3',
    name: 'Portable SSD 1TB',
    price: 159.99,
    rating: 4.9,
    reviewCount: 130,
    image: 'https://images.pexels.com/photos/7763454/pexels-photo-7763454.jpeg',
  },
  {
    id: '4',
    name: 'Noise Cancelling Headphones',
    price: 229.99,
    rating: 4.6,
    reviewCount: 203,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg',
  },
];

export default function PopularProducts() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContentContainer}
    >
      {popularProducts.map((product, index) => (
        <Animated.View 
          key={product.id}
          entering={FadeInRight.delay(index * 100).duration(400)}
        >
          <TouchableOpacity style={styles.productCard}>
            <View style={styles.productImageContainer}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.productContent}>
              <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
              <View style={styles.ratingContainer}>
                <Star size={14} color={Colors.warning[500]} fill={Colors.warning[500]} />
                <Text style={styles.ratingText}>{product.rating}</Text>
                <Text style={styles.reviewCount}>({product.reviewCount})</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>${product.price}</Text>
                <TouchableOpacity style={styles.addToCartButton}>
                  <ShoppingCart size={16} color={Colors.white} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    paddingRight: Spacing.lg,
  },
  productCard: {
    width: 160,
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  productImageContainer: {
    height: 120,
    backgroundColor: Colors.neutral[100],
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productContent: {
    padding: Spacing.sm,
  },
  productName: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.neutral[800],
    marginBottom: Spacing.xs,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  ratingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Colors.neutral[700],
    marginLeft: 4,
  },
  reviewCount: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: Colors.neutral[500],
    marginLeft: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.primary[500],
  },
  addToCartButton: {
    backgroundColor: Colors.primary[500],
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});