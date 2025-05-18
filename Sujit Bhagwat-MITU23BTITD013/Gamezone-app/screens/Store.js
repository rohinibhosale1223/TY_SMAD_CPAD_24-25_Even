import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';

const games = [
  { id: '1', name: 'Cyber Quest', price: 59.99, image: 'https://tse4.mm.bing.net/th/id/OIP.dFb0RmAREU1g0nuqsFqkSwHaEP?cb=iwc2&rs=1&pid=ImgDetMain' },
  { id: '2', name: 'Mystic Wars', price: 49.99, image: 'https://play-lh.googleusercontent.com/MrPlMlDNHeq67F-KGWv3tECigunpLHJR7ukZZl2clgges7y502Vtw-XSgcyJkEAKEc0' },
  { id: '3', name: 'Speed Racer', price: 39.99, image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fEzdKehjLAF1ypF3ldB2xxfq74b.jpg' },
  { id: '4', name: 'Zombie Land', price: 29.99, image: 'https://tse1.mm.bing.net/th/id/OIP.OemjKTyvE3UxZEmaic9N5wHaEx?cb=iwc2&rs=1&pid=ImgDetMain' },
  { id: '5', name: 'Alien Invasion', price: 44.99, image: 'https://cdnb.artstation.com/p/assets/images/images/076/340/637/large/vishal-dhamu-forest-alien1.jpg?1716786959' },
];

const Store = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    Alert.alert('🛒 Added to Cart', `${item.name} has been added to your cart.`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎮 Game Store</Text>
        <TouchableOpacity style={styles.cartIcon}>
          <Text style={styles.cartText}>🛒</Text>
          {cart.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#1e1e2e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartIcon: {
    position: 'relative',
  },
  cartText: {
    fontSize: 24,
    color: '#fff',
  },
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#ff4757',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#2f2f3a',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 12,
    borderRadius: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
