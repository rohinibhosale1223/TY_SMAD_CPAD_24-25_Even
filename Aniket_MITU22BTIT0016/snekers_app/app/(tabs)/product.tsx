import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../../context/CartContext'; // ✅ Add this

const sampleProducts = [
  {
    id: '1',
    name: 'Air Max 90',
    price: '$120',
    img: require('../../assets/images/A1.jpg'),
  },
  {
    id: '2',
    name: 'Jordan 1 Retro',
    price: '$150',
    img: require('../../assets/images/A2.jpg'),
  },
  {
    id: '3',
    name: 'Yeezy Boost 350',
    price: '$200',
    img: require('../../assets/images/A3.jpg'),
  },
  {
    id: '4',
    name: 'Puma RS-X',
    price: '$110',
    img: require('../../assets/images/A4.jpg'),
  },
  {
    id: '5',
    name: 'New Balance 990',
    price: '$130',
    img: require('../../assets/images/A5.jpg'),
  },
  {
    id: '6',
    name: 'Reebok Club C',
    price: '$90',
    img: require('../../assets/images/A6.jpg'),
  },
];

const Product = () => {
  const { addToCart } = useCart(); // ✅ Use context

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Products</Text>
      <Text style={styles.subtitle}>Explore our latest sneakers collection!</Text>

      <FlatList
        data={sampleProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.productBox}>
            <Image source={item.img} style={styles.productImage} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Pressable
              style={styles.button}
              onPress={() =>
                addToCart({
                  ...item,
                  quantity: 1, // ✅ Always add quantity
                })
              }
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  grid: {
    gap: 12,
  },
  productBox: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    margin: 6,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
