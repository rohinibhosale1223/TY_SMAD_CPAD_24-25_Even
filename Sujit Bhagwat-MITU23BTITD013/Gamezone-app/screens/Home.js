import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const games = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    description: 'Futuristic open-world RPG.',
    price: '$59.99',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.webp'
  },
  {
    id: 2,
    title: 'Elden Ring',
    description: 'Dark fantasy action RPG.',
    price: '$69.99',
    image: 'https://th.bing.com/th/id/R.6eb59976f763b05a21fb206ad4a6ebe2?rik=RJHdVxmdgmwQKg&pid=ImgRaw&r=0'
  },
  {
    id: 3,
    title: 'FIFA 24',
    description: 'The latest football simulation.',
    price: '$49.99',
    image: 'https://th.bing.com/th/id/OIP.Y7ddiXBTzshmoU41dM03RgHaLH?w=115&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.1&pid=1.7'
  },
  {
    id: 4,
    title: 'GTA V',
    description: 'Crime, chaos, and an open world.',
    price: '$29.99',
    image: 'https://th.bing.com/th/id/R.173966c30ba346e61bf8d987d9cbebd2?rik=WRZsCdggRrhNKg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-XR0Rh3ZTni0%2fUKnAtCXxArI%2fAAAAAAAAAH8%2f7vafmzl2Iss%2fs1600%2fgta5poster.jpg&ehk=GHYUtAzuyS%2f%2bCKSBCyICxPgbH0C%2bFbghzjUi5NSq2kg%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 5,
    title: 'Minecraft',
    description: 'Create and explore your blocky world.',
    price: '$26.95',
    image:  'https://images.igdb.com/igdb/image/upload/t_cover_big/co8fu6.webp'
  },
  {
    id: 6,
    title: 'Call of Duty: MW2',
    description: 'Fast-paced military shooter.',
    price: '$59.99',
    image:  'https://wallpaperaccess.com/full/2204595.jpg'
  },
  
  {
    id: 7,
    title: 'Red Dead Redemption 2',
    description: 'Epic wild west adventure.',
    price: '$39.99',
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp'
  },
  {
    id: 8,
    title: 'The Witcher 3',
    description: 'Monster hunting fantasy RPG.',
    price: '$29.99',
    image: 'https://cdn.mobygames.com/covers/907872-the-witcher-3-wild-hunt-new-quest-fools-gold-playstation-4-front.jpg'
  },
  {
    id: 9,
    title: 'Valorant',
    description: 'Team-based tactical shooter.',
    price: 'Free',
    image:  'https://images.igdb.com/igdb/image/upload/t_cover_big/co8ok7.webp'
  },
  {
    id: 10,
    title: 'Among Us',
    description: 'Multiplayer betrayal game.',
    price: '$4.99',
    image: 'https://assets.arpost.co/wp-content/uploads/2022/12/28181834/Among-US-VR-game.png'
  }
];

const Home = ({ navigation }) => {
  const renderGame = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.gameTitle}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Store')}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Games This Week</Text>
      <FlatList
        data={games}
        renderItem={renderGame}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  grid: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  gameTitle: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 5,
  },
  price: {
    color: '#ccc',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#00bfff',
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
