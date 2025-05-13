import { View, Text, StyleSheet, useColorScheme, Image } from 'react-native';
import { Heart, MessageCircle, MoveHorizontal as MoreHorizontal } from 'lucide-react-native';
import React = require('react');
export function ActivitySection() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  const activities = [
    {
      id: '1',
      type: 'post',
      timestamp: '2 hours ago',
      content: 'Just finished working on an exciting new feature for our app!',
      likes: 24,
      comments: 8,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '2',
      type: 'post',
      timestamp: '3 days ago',
      content: 'Attending the React Native conference this weekend. Anyone else going to be there?',
      likes: 42,
      comments: 15,
      image: null,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
        Recent Activity
      </Text>
      
      {activities.map(activity => (
        <View 
          key={activity.id}
          style={[styles.activityCard, isDark && styles.darkActivityCard]}
        >
          <View style={styles.activityHeader}>
            <View>
              <Text style={[styles.activityType, isDark && styles.darkText]}>
                {activity.type === 'post' ? 'Shared a post' : 'Commented'}
              </Text>
              <Text style={styles.timestamp}>
                {activity.timestamp}
              </Text>
            </View>
            <MoreHorizontal size={20} color={isDark ? '#adb5bd' : '#6c757d'} />
          </View>
          
          <Text style={[styles.content, isDark && styles.darkText]}>
            {activity.content}
          </Text>
          
          {activity.image && (
            <Image
              source={{ uri: activity.image }}
              style={styles.activityImage}
              resizeMode="cover"
            />
          )}
          
          <View style={styles.activityFooter}>
            <View style={styles.actionButton}>
              <Heart size={18} color={isDark ? '#fa5252' : '#e03131'} />
              <Text style={styles.actionText}>{activity.likes}</Text>
            </View>
            
            <View style={styles.actionButton}>
              <MessageCircle size={18} color={isDark ? '#4dabf7' : '#228be6'} />
              <Text style={styles.actionText}>{activity.comments}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 16,
  },
  darkText: {
    color: '#f8f9fa',
  },
  activityCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  darkActivityCard: {
    backgroundColor: '#212529',
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  activityType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 14,
    color: '#6c757d',
  },
  content: {
    fontSize: 16,
    color: '#495057',
    lineHeight: 22,
    marginBottom: 12,
  },
  activityImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  activityFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#6c757d',
  },
});