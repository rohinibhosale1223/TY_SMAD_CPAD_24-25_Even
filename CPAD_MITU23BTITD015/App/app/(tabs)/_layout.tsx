import { Tabs } from 'expo-router';
import { View, StyleSheet, Platform } from 'react-native';
import { Chrome as Home, Newspaper, ShoppingBag, ShoppingCart, User } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import React from 'react';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary[500],
        tabBarInactiveTintColor: Colors.neutral[500],
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Home size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          title: 'Blog',
          tabBarIcon: ({ color, size }) => (
            <Newspaper size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <ShoppingBag size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <ShoppingCart size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <User size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
    paddingBottom: Platform.OS === 'ios' ? Spacing.sm : 0,
    paddingTop: Spacing.sm,
    height: Platform.OS === 'ios' ? 88 : 64,
    ...Platform.select({
      web: {
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.05)',
      },
      default: {
        elevation: 8,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
      },
    }),
  },
  tabBarLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    marginBottom: Platform.OS === 'ios' ? 0 : Spacing.xs,
  },
  tabBarIcon: {
    marginTop: Spacing.xs,
  },
});