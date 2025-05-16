import { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  ActivityIndicator,
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { currentUser } from '@/data/user';
import { books } from '@/data/books';
import { Book as BookType, ReadingStatus } from '@/types';
import BookCard from '@/components/BookCard';

export default function MyBooksScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentFilter, setCurrentFilter] = useState<ReadingStatus | 'all'>('all');
  const [filteredBooks, setFilteredBooks] = useState<BookType[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      filterBooks('all');
      setIsLoading(false);
    }, 1000);

    // Cleanup function to prevent state updates after unmount
    return () => clearTimeout(timer);
  }, []);

  const filterBooks = (filter: ReadingStatus | 'all') => {
    setCurrentFilter(filter);
    
    if (filter === 'all') {
      const allBooks = currentUser.books.map(userBook => {
        const book = books.find(b => b.id === userBook.bookId);
        return book as BookType;
      });
      setFilteredBooks(allBooks);
      return;
    }
    
    const filtered = currentUser.books
      .filter(userBook => userBook.status === filter)
      .map(userBook => {
        const book = books.find(b => b.id === userBook.bookId);
        return book as BookType;
      });
      
    setFilteredBooks(filtered);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#800020" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Books</Text>
      </View>
      
      <View style={styles.filterContainer}>
        <ScrollableFilter 
          options={[
            { label: 'All', value: 'all' },
            { label: 'Want to Read', value: 'want-to-read' },
            { label: 'Currently Reading', value: 'currently-reading' },
            { label: 'Read', value: 'read' }
          ]}
          currentValue={currentFilter}
          onChange={(value) => filterBooks(value as ReadingStatus | 'all')}
        />
      </View>
      
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <BookCard book={item} size="small" />
          </View>
        )}
        numColumns={3}
        contentContainerStyle={styles.booksContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No books in this category yet.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

interface FilterOption {
  label: string;
  value: string;
}

interface ScrollableFilterProps {
  options: FilterOption[];
  currentValue: string;
  onChange: (value: string) => void;
}

function ScrollableFilter({ options, currentValue, onChange }: ScrollableFilterProps) {
  return (
    <View style={styles.scrollableFilter}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.filterOption,
            currentValue === option.value && styles.activeFilterOption
          ]}
          onPress={() => onChange(option.value)}
        >
          <Text 
            style={[
              styles.filterText,
              currentValue === option.value && styles.activeFilterText
            ]}
          >
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 28,
    color: '#14213D',
  },
  filterContainer: {
    marginVertical: 8,
  },
  scrollableFilter: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  filterOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  activeFilterOption: {
    backgroundColor: '#14213D',
  },
  filterText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  activeFilterText: {
    fontFamily: 'Lato-Bold',
    color: '#FFFFFF',
  },
  booksContainer: {
    padding: 12,
  },
  bookItem: {
    flex: 1/3,
    padding: 4,
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
});