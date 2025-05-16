import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import React = require('react');
interface SettingsHeaderProps {
  title: string;
}

export function SettingsHeader({ title }: SettingsHeaderProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.header}>
      <Text style={[styles.title, isDark && styles.darkText]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#212529',
  },
  darkText: {
    color: '#f8f9fa',
  },
});