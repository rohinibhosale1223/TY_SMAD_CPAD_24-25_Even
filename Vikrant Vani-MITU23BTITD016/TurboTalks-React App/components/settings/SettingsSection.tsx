import { ReactNode } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import React = require('react');
interface SettingsSectionProps {
  title: string;
  children: ReactNode;
}

export function SettingsSection({ title, children }: SettingsSectionProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, isDark && styles.darkText]}>
        {title}
      </Text>
      <View style={[styles.sectionContent, isDark && styles.darkSectionContent]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#228be6',
    marginBottom: 8,
    marginLeft: 16,
  },
  darkText: {
    color: '#4dabf7',
  },
  sectionContent: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  darkSectionContent: {
    backgroundColor: '#212529',
  },
});