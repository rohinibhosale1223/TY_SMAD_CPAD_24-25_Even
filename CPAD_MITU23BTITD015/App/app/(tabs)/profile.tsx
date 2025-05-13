import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogOut, User, Heart, ShoppingBag, Clock, Settings, CreditCard } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import ProfileMenuItem from '@/components/profile/ProfileMenuItem';
import React from 'react';
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <User size={40} color={Colors.primary[500]} />
            </View>
          </View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuSectionTitle}>Your Activity</Text>
          
          <ProfileMenuItem 
            icon={<Heart size={24} color={Colors.accent[500]} />}
            title="Saved Articles"
            subtitle="12 articles saved"
          />
          
          <ProfileMenuItem 
            icon={<ShoppingBag size={24} color={Colors.primary[500]} />}
            title="Your Orders"
            subtitle="View your order history"
          />
          
          <ProfileMenuItem 
            icon={<Heart size={24} color={Colors.accent[500]} />}
            title="Wishlist"
            subtitle="8 items in your wishlist"
          />
          
          <ProfileMenuItem 
            icon={<Clock size={24} color={Colors.neutral[700]} />}
            title="Recently Viewed"
            subtitle="Products and articles you viewed"
          />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuSectionTitle}>Settings</Text>
          
          <ProfileMenuItem 
            icon={<CreditCard size={24} color={Colors.primary[500]} />}
            title="Payment Methods"
            subtitle="Manage your payment options"
          />
          
          <ProfileMenuItem 
            icon={<Settings size={24} color={Colors.neutral[700]} />}
            title="Account Settings"
            subtitle="Notifications, privacy, and more"
          />
          
          <TouchableOpacity style={styles.logoutButton}>
            <LogOut size={20} color={Colors.error[500]} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.neutral[800],
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: Spacing.xxl,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  profileImageContainer: {
    marginBottom: Spacing.md,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.neutral[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: Colors.neutral[800],
    marginBottom: Spacing.xs,
  },
  profileEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.neutral[600],
    marginBottom: Spacing.md,
  },
  editButton: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    backgroundColor: Colors.primary[50],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary[500],
  },
  editButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary[500],
  },
  menuSection: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
  },
  menuSectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: Colors.neutral[800],
    marginBottom: Spacing.md,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    marginTop: Spacing.md,
  },
  logoutText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.error[500],
    marginLeft: Spacing.md,
  },
});