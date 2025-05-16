import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import React = require('react');
export function WelcomeHeader() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.container}>
      <Text style={[styles.greeting, isDark && styles.darkText]}>
        Hello,
      </Text>
      <Text style={[styles.userName, isDark && styles.darkText]}>
        Turbo-Talks User
      </Text>
      <Text style={styles.welcomeMessage}>
        Welcome back to your dashboard!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 4,
  },
  userName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 8,
  },
  welcomeMessage: {
    fontSize: 16,
    color: '#6c757d',
  },
  darkText: {
    color: '#f8f9fa',
  },
});