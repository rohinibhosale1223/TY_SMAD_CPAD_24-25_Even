import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useTransactions } from '../context/TransactionContext';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function Categories() {
  const { transactions } = useTransactions();

  const categoryTotals = transactions.reduce((acc, tx) => {
    const key = tx.category || 'Uncategorized';
    acc[key] = (acc[key] || 0) + tx.amount;
    return acc;
  }, {});

  const chartData = Object.entries(categoryTotals).map(([name, amount], index) => ({
    name,
    amount,
    color: chartColors[index % chartColors.length],
    legendFontColor: '#ccc',
    legendFontSize: 14,
  }));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Income vs Expense by Category</Text>

      {chartData.length === 0 ? (
        <Text style={styles.empty}>No data available yet.</Text>
      ) : (
        <PieChart
          data={chartData}
          width={screenWidth - 32}
          height={260}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="16"
          absolute
          chartConfig={{
            backgroundColor: '#0f172a',
            backgroundGradientFrom: '#0f172a',
            backgroundGradientTo: '#0f172a',
            color: () => `#fff`,
          }}
        />
      )}
    </ScrollView>
  );
}

const chartColors = [
  '#22c55e', '#f87171', '#facc15', '#60a5fa', '#a78bfa', '#fb923c', '#2dd4bf'
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  empty: {
    color: '#999',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});
