import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login'; // NEW
import Dashboard from './screens/Dashboard';
import AddTransaction from './screens/AddTransaction';
import History from './screens/History';
import Categories from './screens/Categories';
import Reports from './screens/Reports';

import { TransactionProvider, useTransactions } from './context/TransactionContext';

const Stack = createNativeStackNavigator();

// Conditional Stack based on user login
function AppStack() {
  const { user } = useTransactions();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="AddTransaction" component={AddTransaction} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Reports" component={Reports} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </TransactionProvider>
  );
}
