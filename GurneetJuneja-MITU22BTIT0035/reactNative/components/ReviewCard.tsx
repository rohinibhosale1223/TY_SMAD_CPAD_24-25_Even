import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Review } from '@/types';
import { ThumbsUp, Star } from 'lucide-react-native';
import { useState } from 'react';

interface ReviewCardProps {
  review: Review;
  showBookInfo?: boolean;
}

export default function ReviewCard({ review, showBookInfo = false }: ReviewCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(review.likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: review.userAvatar }} 
          style={styles.avatar} 
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{review.userName}</Text>
          <Text style={styles.date}>{formatDate(review.date)}</Text>
        </View>
      </View>
      
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star}
            size={16} 
            color='#800020'
            fill={star <= review.rating ? '#800020' : 'transparent'}
          />
        ))}
      </View>
      
      <Text style={styles.reviewText}>{review.text}</Text>
      
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={styles.likeButton} 
          onPress={handleLike}
        >
          <ThumbsUp 
            size={16} 
            color={liked ? '#800020' : '#6B7280'} 
            fill={liked ? '#800020' : 'transparent'}
          />
          <Text style={[
            styles.likeCount, 
            liked && styles.likedText
          ]}>
            {likeCount}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#14213D',
  },
  date: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  reviewText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
  likeCount: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  likedText: {
    color: '#800020',
  },
});