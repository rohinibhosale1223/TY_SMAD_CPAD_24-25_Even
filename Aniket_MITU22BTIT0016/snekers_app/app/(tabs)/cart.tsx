import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../../context/CartContext';

export default function CartScreen() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart</Text>
        <Text style={styles.subtitle}>You have no items in your cart yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image
              source={typeof item.img === 'string' ? { uri: item.img } : item.img}
              style={styles.cartImage}
              resizeMode="cover"
            />
            <View style={styles.cartDetails}>
              <Text style={styles.cartName}>{item.name}</Text>
              <Text style={styles.cartQuantity}>Quantity: {item.quantity}</Text>
              <Text style={styles.cartPrice}>Price: {item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: 'gray' },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  cartDetails: {
    flex: 1,
  },
  cartName: {
    fontWeight: '600',
    fontSize: 16,
  },
  cartQuantity: {
    marginTop: 4,
    fontSize: 14,
  },
  cartPrice: {
    marginTop: 2,
    color: '#666',
  },
});
