import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/Home';
import StoreScreen from './screens/Store';
import LibraryScreen from './screens/Library';
import WishlistScreen from './screens/Wishlist';
import CartScreen from './screens/Cart';
import ProfileScreen from './screens/Profile';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }: { route: { name: string } }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#66c0f4',
          tabBarInactiveTintColor: '#c7d5e0',
          tabBarStyle: {
            backgroundColor: '#171a21',
            borderTopColor: '#121417',
            paddingBottom: 6,
            paddingTop: 6,
          },
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            let iconName: string;

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Store':
                iconName = 'pricetags-outline'; // Shopping tag
                break;
              case 'Library':
                iconName = 'albums-outline'; // Game library
                break;
              case 'Wishlist':
                iconName = 'heart-outline';
                break;
              case 'Cart':
                iconName = 'cart-outline';
                break;
              case 'Profile':
                iconName = 'person-circle-outline';
                break;
              default:
                iconName = 'ellipse-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
