import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Store')}>
        <Text style={styles.link}>Store</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.link}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
        <Text style={styles.link}>Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  link: {
    fontSize: 16,
    color: '#007AFF',
  },
});
