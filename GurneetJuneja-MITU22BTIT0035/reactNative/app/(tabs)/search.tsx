import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { books } from '@/data/books';
import { Book } from '@/types';
import BookCard from '@/components/BookCard';
import { Search as SearchIcon, Tag, Sparkles } from 'lucide-react-native';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Fantasy', 'J.K. Rowling', 'Classics'
  ]);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  
  const popularGenres = [
    'Fiction', 'Fantasy', 'Romance', 'Classics', 'Science Fiction',
    'Mystery', 'Thriller', 'Biography', 'History', 'Self Help'
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const results = books.filter(book => 
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.genre.some(g => g.toLowerCase().includes(query.toLowerCase())) ||
      book.isbn.includes(query)
    );
    
    setSearchResults(results);
  };

  const handleGenreSelect = (genre: string) => {
    setActiveGenre(genre);
    const genreResults = books.filter(book =>
      book.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    );
    setSearchResults(genreResults);
    setSearchQuery('');
    
    // Add to recent searches if not already there
    if (!recentSearches.includes(genre)) {
      setRecentSearches(prev => [genre, ...prev.slice(0, 4)]);
    }
  };

  const handleRecentSearch = (query: string) => {
    handleSearch(query);
    setActiveGenre(null);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setActiveGenre(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
        <View style={styles.searchContainer}>
          <SearchIcon size={18} color="#6B7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by title, author, or ISBN"
            value={searchQuery}
            onChangeText={handleSearch}
            clearButtonMode="while-editing"
          />
        </View>
      </View>

      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <BookCard book={item} size="small" />
            </View>
          )}
          numColumns={3}
          contentContainerStyle={styles.resultsContainer}
          ListHeaderComponent={
            <View style={styles.resultsHeader}>
              <Text style={styles.resultsTitle}>
                {activeGenre 
                  ? `${activeGenre} Books (${searchResults.length})` 
                  : `Results (${searchResults.length})`
                }
              </Text>
              {activeGenre && (
                <TouchableOpacity onPress={clearSearch}>
                  <Text style={styles.clearButton}>Clear</Text>
                </TouchableOpacity>
              )}
            </View>
          }
        />
      ) : (
        <View style={styles.content}>
          {recentSearches.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Sparkles size={18} color="#800020" />
                <Text style={styles.sectionTitle}>Recent Searches</Text>
              </View>
              <View style={styles.chipContainer}>
                {recentSearches.map((search, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.chip}
                    onPress={() => handleRecentSearch(search)}
                  >
                    <Text style={styles.chipText}>{search}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
          
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Tag size={18} color="#800020" />
              <Text style={styles.sectionTitle}>Popular Genres</Text>
            </View>
            <View style={styles.chipContainer}>
              {popularGenres.map((genre, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.chip}
                  onPress={() => handleGenreSelect(genre)}
                >
                  <Text style={styles.chipText}>{genre}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#374151',
    paddingVertical: 12,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 18,
    color: '#14213D',
    marginLeft: 8,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  chipText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#374151',
  },
  resultsContainer: {
    padding: 16,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultsTitle: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 18,
    color: '#14213D',
  },
  clearButton: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#800020',
  },
  resultItem: {
    flex: 1/3,
    padding: 4,
  },
});