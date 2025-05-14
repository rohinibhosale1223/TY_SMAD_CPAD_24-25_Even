import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { currentUser } from '@/data/user';
import { reviews } from '@/data/reviews';
import { Review } from '@/types';
import { Settings, BookOpen, Star, LogOut } from 'lucide-react-native';
import ReviewCard from '@/components/ReviewCard';

export default function ProfileScreen() {
  // Get user's reviews
  const userReviews = reviews.filter(review => review.userId === currentUser.id);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color="#14213D" />
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: currentUser.avatar }}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{currentUser.name}</Text>
            <Text style={styles.joinDate}>Member since {formatDate(currentUser.joinDate)}</Text>
          </View>
        </View>
        
        <Text style={styles.bio}>{currentUser.bio}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <BookOpen size={20} color="#800020" />
            <Text style={styles.statValue}>{currentUser.booksRead}</Text>
            <Text style={styles.statLabel}>Books Read</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <BookOpen size={20} color="#14213D" />
            <Text style={styles.statValue}>{currentUser.booksInProgress}</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Star size={20} color="#228B22" />
            <Text style={styles.statValue}>{currentUser.totalReviews}</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorite Genres</Text>
          <View style={styles.genreContainer}>
            {currentUser.favoriteGenres.map((genre, index) => (
              <View key={index} style={styles.genreBadge}>
                <Text style={styles.genreText}>{genre}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Reviews</Text>
          {userReviews.map(review => (
            <ReviewCard key={review.id} review={review} showBookInfo />
          ))}
        </View>
        
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={18} color="#EF4444" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 28,
    color: '#14213D',
  },
  settingsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 22,
    color: '#14213D',
  },
  joinDate: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  bio: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#E5E7EB',
  },
  statValue: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 18,
    color: '#14213D',
    marginTop: 8,
  },
  statLabel: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 18,
    color: '#14213D',
    marginLeft: 16,
    marginBottom: 12,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
  genreBadge: {
    backgroundColor: '#14213D',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  genreText: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#FFFFFF',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 16,
    marginBottom: 32,
  },
  logoutText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#EF4444',
    marginLeft: 8,
  },
});