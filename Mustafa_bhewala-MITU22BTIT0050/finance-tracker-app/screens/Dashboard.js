import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTransactions } from '../context/TransactionContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dashboard({ navigation }) {
  const { transactions, user, setUser } = useTransactions();

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  const handleLogout = () => {
    setUser(null);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.topRow}>
          <Text style={styles.header}>📊 Welcome, {user}</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Total Income</Text>
          <Text style={[styles.amount, { color: '#22c55e' }]}>₹{income}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Total Expense</Text>
          <Text style={[styles.amount, { color: '#f87171' }]}>₹{expense}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Net Balance</Text>
          <Text style={[styles.amount, { color: balance >= 0 ? '#38bdf8' : '#ef4444' }]}>₹{balance}</Text>
        </View>

        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('AddTransaction')}>
            <Text style={styles.navText}>➕ Add Transaction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('History')}>
            <Text style={styles.navText}>📄 View History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.navText}>📊 Category Chart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Reports')}>
            <Text style={styles.navText}>📅 Reports</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  header: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  logout: {
    color: '#f87171',
    fontWeight: '600',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: '#a1a1aa',
    marginBottom: 5,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navContainer: {
    marginTop: 30,
  },
  navButton: {
    backgroundColor: '#1e40af',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
