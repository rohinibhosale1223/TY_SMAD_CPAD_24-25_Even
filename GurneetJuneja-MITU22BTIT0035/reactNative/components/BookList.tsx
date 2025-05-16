import { View, Text, FlatList, StyleSheet } from 'react-native';
import BookCard from './BookCard';
import { Book } from '@/types';

interface BookListProps {
  title: string;
  books: Book[];
  size?: 'small' | 'medium' | 'large';
  horizontal?: boolean;
}

export default function BookList({ 
  title, 
  books, 
  size = 'medium',
  horizontal = true 
}: BookListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>{title}</Text>
      <FlatList
        data={books}
        renderItem={({ item }) => <BookCard book={item} size={size} />}
        keyExtractor={(item) => item.id}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  listTitle: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 20,
    color: '#14213D',
    marginLeft: 16,
    marginBottom: 8,
  },
  listContent: {
    paddingHorizontal: 8,
  },
});