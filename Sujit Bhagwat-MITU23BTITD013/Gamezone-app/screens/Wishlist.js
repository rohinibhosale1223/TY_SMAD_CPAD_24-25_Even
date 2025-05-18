import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const initialWishlist = [
  {
    id: '1',
    name: 'PS5',
    image: 'https://manofmany.com/_next/image?url=https:%2F%2Fapi.manofmany.com%2Fwp-content%2Fuploads%2F2023%2F12%2FPs5-Pro-Leak.jpg&w=1200&q=75',
  },
  {
    id: '2',
    name: 'Rog Alice',
    image: 'https://rog.asus.com/media/1683756065840.jpg',
  },
  {
    id: '3',
    name: 'ROG Gaming Mouse',
    image: 'https://www.gaminggearskh.com/Content/Upload/ItemImage/ea69ba0b-19e5-40aa-9b50-ef75ad73da52.jpg',
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const moveToCart = (item) => {
    Alert.alert('Moved to Cart', `${item.name} was moved to your cart.`);
    // Add cart logic here if needed
    removeFromWishlist(item.id);
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => moveToCart(item)} style={styles.button}>
            <Text style={styles.buttonText}>Move to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeFromWishlist(item.id)} style={styles.removeButton}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Your wishlist is empty.</Text>}
      />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 40,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: '#00bfff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
  },
  removeButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  removeText: {
    color: '#ff4d4d',
  },
  empty: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
});
