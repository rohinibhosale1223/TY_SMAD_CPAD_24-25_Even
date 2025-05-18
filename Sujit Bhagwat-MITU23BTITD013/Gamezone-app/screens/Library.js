import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const purchasedGames = [
  {
    id: '1',
    title: 'God of War',
    image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg',
    status: 'Installed',
  },
  {
    id: '2',
    title: 'The Witcher 3',
    image: 'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f',
    status: 'Download',
  },
  {
    id: '3',
    title: 'Cyberpunk 2077',
    image: 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7',
    status: 'Installed',
  },
  {
    id: '4',
    title: 'Minecraft',
    image: 'https://tse1.mm.bing.net/th/id/OIP.MP70R6aZanZbzp4JdwwfFAHaEK?cb=iwc2&rs=1&pid=ImgDetMain',
    status: 'Download',
  },
];

const Library = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Library</Text>
      <FlatList
        data={purchasedGames}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
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
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  status: {
    marginTop: 5,
    fontSize: 14,
    color: '#00bfff',
  },
});
