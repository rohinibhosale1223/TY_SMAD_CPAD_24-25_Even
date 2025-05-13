import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import React = require('react');
export function ProfileStats() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  const stats = [
    { label: 'Posts', value: '24' },
    { label: 'Followers', value: '538' },
    { label: 'Following', value: '128' },
  ];

  return (
    <View style={styles.statsContainer}>
      {stats.map((stat, index) => (
        <View key={stat.label} style={styles.statItem}>
          <Text style={[styles.statValue, isDark && styles.darkText]}>
            {stat.value}
          </Text>
          <Text style={styles.statLabel}>
            {stat.label}
          </Text>
          
          {index < stats.length - 1 && (
            <View style={[styles.divider, isDark && styles.darkDivider]} />
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6c757d',
  },
  divider: {
    position: 'absolute',
    right: 0,
    top: 8,
    height: 24,
    width: 1,
    backgroundColor: '#e9ecef',
  },
  darkText: {
    color: '#f8f9fa',
  },
  darkDivider: {
    backgroundColor: '#343a40',
  },
});