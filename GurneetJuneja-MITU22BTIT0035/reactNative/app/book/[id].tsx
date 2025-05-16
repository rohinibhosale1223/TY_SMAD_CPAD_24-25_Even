import { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  ActivityIndicator
} from 'react-native';
import { Link, useLocalSearchParams, Stack } from 'expo-router';
import { books } from '@/data/books';
import { reviews } from '@/data/reviews';
import { Book as BookType, Review, ReadingStatus } from '@/types';
import { currentUser } from '@/data/user';
import ReviewCard from '@/components/ReviewCard';
import ReadingStatusButton from '@/components/ReadingStatusButton';
import { X, Star, Calendar, Tag, Book } from 'lucide-react-native';

export default function BookDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [book, setBook] = useState<BookType | null>(null);
  const [bookReviews, setBookReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userBookStatus, setUserBookStatus] = useState<ReadingStatus>('none');
  
  useEffect(() => {
    if (id) {
      // Simulate API fetch delay
      const timer = setTimeout(() => {
        const foundBook = books.find(b => b.id === id);
        if (foundBook) {
          setBook(foundBook);
          setBookReviews(reviews.filter(r => r.bookId === id));
          
          // Check if user has this book in their list
          const userBook = currentUser.books.find(b => b.bookId === id);
          if (userBook) {
            setUserBookStatus(userBook.status);
          }
        }
        setIsLoading(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [id]);

  const handleStatusChange = (status: ReadingStatus) => {
    setUserBookStatus(status);
    // In a real app, this would update the user's book data in the backend
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#800020" />
      </View>
    );
  }

  if (!book) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Book not found</Text>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </Link>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ 
        headerShown: true,
        headerTitle: '',
        headerTransparent: true,
        headerLeft: () => (
          <Link href="/" asChild>
            <TouchableOpacity style={styles.closeButton}>
              <X size={24} color="#FFF" />
            </TouchableOpacity>
          </Link>
        ),
      }} />
    
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image 
          source={{ uri: book.coverUrl }} 
          style={styles.coverImage}
          resizeMode="cover"
        />
        
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>by {book.author}</Text>
            
            <View style={styles.ratingContainer}>
              <Star size={18} color='#800020' fill='#800020' />
              <Text style={styles.rating}>{book.avgRating.toFixed(1)}</Text>
              <Text style={styles.ratingCount}>({book.totalRatings} ratings)</Text>
            </View>
          </View>
          
          <ReadingStatusButton 
            initialStatus={userBookStatus}
            onChangeStatus={handleStatusChange}
          />
          
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Calendar size={16} color="#14213D" />
              <Text style={styles.infoText}>
                Published: {formatDate(book.publishedDate)}
              </Text>
            </View>
            
            <View style={styles.infoItem}>
              <Book size={16} color="#14213D" />
              <Text style={styles.infoText}>
                {book.pageCount} pages
              </Text>
            </View>
            
            <View style={styles.infoItem}>
              <Tag size={16} color="#14213D" />
              <View style={styles.genreContainer}>
                {book.genre.map((genre, index) => (
                  <Text key={index} style={styles.genre}>
                    {genre}{index < book.genre.length - 1 ? ', ' : ''}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>About the Book</Text>
            <Text style={styles.description}>{book.description}</Text>
          </View>
          
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Reviews ({bookReviews.length})</Text>
            {bookReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F5F5DC',
  },
  errorText: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 18,
    color: '#14213D',
    marginBottom: 16,
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#800020',
    borderRadius: 8,
  },
  backButtonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  coverImage: {
    width: '100%',
    height: 400,
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 24,
    color: '#14213D',
  },
  author: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  rating: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#800020',
    marginLeft: 6,
  },
  ratingCount: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 6,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#374151',
    marginLeft: 8,
  },
  genreContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 8,
  },
  genre: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#374151',
  },
  sectionContainer: {
    marginTop: 24,
  },
  sectionTitle: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 18,
    color: '#14213D',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    color: '#374151',
    lineHeight: 24,
  },
});