import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { books } from '@/data/books';
import BookList from '@/components/BookList';
import { Book } from '@/types';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [newReleases, setNewReleases] = useState<Book[]>([]);
  const [popularBooks, setPopularBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      // Filter books for different sections
      setFeaturedBooks(books.slice(0, 4));
      setNewReleases(books.slice(4, 8));
      setPopularBooks(books.filter(book => book.avgRating >= 4.7));
      setIsLoading(false);
    }, 1000);

    // Cleanup function to prevent state updates after unmount
    return () => clearTimeout(timer);
  }, []);

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
        <Text style={styles.greeting}>Welcome back!</Text>
        <Text style={styles.title}>Discover your next great read</Text>
      </View>
      
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <BookList 
          title="Featured Books" 
          books={featuredBooks}
          size="large"
        />

        <BookList 
          title="New Releases" 
          books={newReleases}
          size="medium"
        />

        <BookList 
          title="Highly Rated" 
          books={popularBooks}
          size="medium"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC', // Cream background
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
  greeting: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#6B7280',
  },
  title: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 24,
    color: '#14213D',
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
});