import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { PenTool as Tool, Camera, FileText, MessageCircle } from 'lucide-react-native';
import React from 'react';
export default function ServicesScreen() {
  const services = [
    {
      id: '1',
      title: 'Car Inspections',
      description: 'Professional pre-purchase inspections',
      icon: <Tool size={24} color="#ff3b30" />,
    },
    {
      id: '2',
      title: 'Photo Shoots',
      description: 'Professional car photography',
      icon: <Camera size={24} color="#ff3b30" />,
    },
    {
      id: '3',
      title: 'Consultation',
      description: 'Expert car buying advice',
      icon: <FileText size={24} color="#ff3b30" />,
    },
    {
      id: '4',
      title: 'Car Community',
      description: 'Join our enthusiast community',
      icon: <MessageCircle size={24} color="#ff3b30" />,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Our Services</Text>
        <Text style={styles.subtitle}>Expert automotive services for enthusiasts</Text>
        
        <View style={styles.servicesGrid}>
          {services.map(service => (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <View style={styles.iconContainer}>
                {service.icon}
              </View>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8e8e8e',
    marginBottom: 24,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#8e8e8e',
  },
});