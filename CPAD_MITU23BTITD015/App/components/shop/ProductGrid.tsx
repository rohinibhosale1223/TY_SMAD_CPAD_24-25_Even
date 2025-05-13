import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Star, Heart } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import React from 'react';

const { width } = Dimensions.get('window');
const COLUMN_GAP = Spacing.md;
const CARD_WIDTH = (width - (Spacing.lg * 2) - COLUMN_GAP) / 2;

const products = [
  {
    id: '1',
    name: 'Premium Wireless Earbuds',
    price: 129.99,
    rating: 4.8,
    reviewCount: 245,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
    category: 'Audio',
  },
  {
    id: '2',
    name: 'Smart Watch Series 7',
    price: 349.99,
    rating: 4.7,
    reviewCount: 182,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'Wearables',
  },
  {
    id: '3',
    name: 'Ultra-Fast Gaming Mouse',
    price: 79.99,
    rating: 4.6,
    reviewCount: 130,
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg',
    category: 'Gaming',
  },
  {
    id: '4',
    name: 'Noise Cancelling Headphones',
    price: 229.99,
    rating: 4.6,
    reviewCount: 203,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg',
    category: 'Audio',
  },
  {
    id: '5',
    name: 'Ultra HD 4K Webcam',
    price: 99.99,
    rating: 4.5,
    reviewCount: 87,
    image: 'https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg',
    category: 'Cameras',
  },
  {
    id: '6',
    name: 'High-Performance Gaming Laptop',
    price: 1299.99,
    rating: 4.9,
    reviewCount: 172,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg',
    category: 'Laptops',
  },
];

export default function ProductGrid() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { addToCart } = useCartStore();

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string }) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const renderProduct = ({ item }: { item: { id: string; name: string; price: number; image: string; rating: number; reviewCount: number } }) => (
    <View style={styles.productCard}>
      <TouchableOpacity 
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item.id)}
      >
        <Heart 
          size={20} 
          color={favorites.includes(item.id) ? Colors.accent[500] : Colors.neutral[400]} 
          fill={favorites.includes(item.id) ? Colors.accent[500] : 'transparent'} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.productImageContainer}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.productImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
      
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        
        <View style={styles.ratingContainer}>
          <Star size={14} color={Colors.warning[500]} fill={Colors.warning[500]} />
          <Text style={styles.ratingText}>{item.rating}</Text>
          <Text style={styles.reviewCount}>({item.reviewCount})</Text>
        </View>
        
        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>${item.price}</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => handleAddToCart(item)}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: 120, // Extra space for the tab bar
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  productCard: {
    width: CARD_WIDTH,
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  favoriteButton: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    zIndex: 10,
    backgroundColor: Colors.white,
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImageContainer: {
    height: 150,
    backgroundColor: Colors.neutral[100],
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    padding: Spacing.sm,
  },
  productName: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.neutral[800],
    marginBottom: Spacing.xs,
    height: 40, // Fixed height for 2 lines
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
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.primary[500],
  },
  addButton: {
    backgroundColor: Colors.primary[500],
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    borderRadius: 4,
  },
  addButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: Colors.white,
  },
});