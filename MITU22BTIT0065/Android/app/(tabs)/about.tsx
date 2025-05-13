import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react-native';
import React from 'react';
export default function AboutScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <Text style={styles.headerTitle}>About Us</Text>
        <Text style={styles.headerSubtitle}>Our story and mission</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.storySection}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
            style={styles.storyImage} 
          />
          <Text style={styles.sectionTitle}>Our Story</Text>
          <Text style={styles.storyText}>
            OneShot was founded in 2022 by a group of passionate photographers who wanted to create a platform where photography enthusiasts of all levels could learn, share, and grow together.
          </Text>
          <Text style={styles.storyText}>
            What started as a small blog has grown into a vibrant community of photographers from around the world, all united by their love for capturing moments through the lens.
          </Text>
        </View>
        
        <View style={styles.missionSection}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            At OneShot, we believe that photography is more than just taking pictures—it's about storytelling, creativity, and connecting with the world around us. Our mission is to inspire and empower photographers to develop their skills, find their unique voice, and share their perspective with the world.
          </Text>
        </View>
        
        <View style={styles.teamSection}>
          <Text style={styles.sectionTitle}>Meet the Team</Text>
          <View style={styles.teamMembersContainer}>
            <View style={styles.teamMember}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
                style={styles.teamMemberImage} 
              />
              <Text style={styles.teamMemberName}>Jason Kim</Text>
              <Text style={styles.teamMemberRole}>Founder & Editor</Text>
            </View>
            
            <View style={styles.teamMember}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
                style={styles.teamMemberImage} 
              />
              <Text style={styles.teamMemberName}>Sarah Chen</Text>
              <Text style={styles.teamMemberRole}>Lead Photographer</Text>
            </View>
            
            <View style={styles.teamMember}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }} 
                style={styles.teamMemberImage} 
              />
              <Text style={styles.teamMemberName}>Emma Rodriguez</Text>
              <Text style={styles.teamMemberRole}>Content Director</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.contactText}>
            Have questions, feedback, or want to collaborate? We'd love to hear from you!
          </Text>
          
          <TouchableOpacity style={styles.contactButton}>
            <Mail size={20} color="#FFFFFF" />
            <Text style={styles.contactButtonText}>Email Us</Text>
          </TouchableOpacity>
          
          <View style={styles.socialLinks}>
            <TouchableOpacity style={styles.socialButton}>
              <Instagram size={24} color="#121212" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Twitter size={24} color="#121212" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Facebook size={24} color="#121212" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#121212',
    padding: 16,
    paddingBottom: 24,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: '#E0E0E0',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    marginTop: 2,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  storySection: {
    marginBottom: 30,
  },
  storyImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#121212',
    marginBottom: 12,
  },
  storyText: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: '#333333',
    lineHeight: 22,
    marginBottom: 12,
  },
  missionSection: {
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 30,
  },
  missionText: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: '#333333',
    lineHeight: 22,
  },
  teamSection: {
    marginBottom: 30,
  },
  teamMembersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  teamMember: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 16,
  },
  teamMemberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  teamMemberName: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: '#121212',
    textAlign: 'center',
  },
  teamMemberRole: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: '#666666',
    textAlign: 'center',
  },
  contactSection: {
    marginBottom: 30,
  },
  contactText: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: '#333333',
    lineHeight: 22,
    marginBottom: 16,
  },
  contactButton: {
    backgroundColor: '#121212',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    marginLeft: 8,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
});