import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import React from 'react';
type ProfileMenuItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export default function ProfileMenuItem({ icon, title, subtitle, onPress }: ProfileMenuItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <ChevronRight size={20} color={Colors.neutral[400]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.neutral[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.neutral[800],
    marginBottom: 2,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.neutral[600],
  },
});