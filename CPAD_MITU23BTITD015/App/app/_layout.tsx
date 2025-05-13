import { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { SplashScreen } from 'expo-router';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import React from 'react';
// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

function NavigationHeader() {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
        <ArrowLeft size={24} color={Colors.neutral[800]} />
      </TouchableOpacity>
    </View>
  );
}

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-Bold': Inter_700Bold,
  });

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Return null to keep splash screen visible while fonts load
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack 
        screenOptions={{
          header: () => <NavigationHeader />,
          headerShown: true,
        }}>
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: true,
          }} 
        />
        <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 8,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  headerButton: {
    padding: 8,
    marginRight: 8,
  },
});