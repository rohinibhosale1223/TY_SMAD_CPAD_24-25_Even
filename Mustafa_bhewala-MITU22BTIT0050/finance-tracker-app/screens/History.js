import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTransactions } from '../context/TransactionContext';

export default function History() {
  const { transactions } = useTransactions();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.date}>{item.date} • {item.category}</Text>
      </View>
      <Text style={[styles.amount, item.type === 'income' ? styles.income : styles.expense]}>
        ₹{item.amount}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      {transactions.length === 0 ? (
        <Text style={styles.empty}>No transactions found.</Text>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  item: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  desc: {
    fontSize: 16,
    color: '#fff',
  },
  date: {
    fontSize: 12,
    color: '#aaa',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  income: {
    color: 'lightgreen',
  },
  expense: {
    color: 'salmon',
  },
  empty: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});
