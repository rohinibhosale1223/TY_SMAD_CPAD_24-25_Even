import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { useTransactions } from '../context/TransactionContext';

const screenWidth = Dimensions.get('window').width;

export default function Reports() {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  // Simulate total (income - expense) per day
  const weeklyData = [
    { label: 'Mon', value: 500 },
    { label: 'Tue', value: 1000 },
    { label: 'Wed', value: 700 },
    { label: 'Thu', value: -400 },
    { label: 'Fri', value: 1600 },
    { label: 'Sat', value: 300 },
    { label: 'Sun', value: 200 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📈 Financial Report</Text>

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

      <Text style={styles.chartTitle}>Net Flow (Sample Data)</Text>
      <BarChart
        data={{
          labels: weeklyData.map((d) => d.label),
          datasets: [{ data: weeklyData.map((d) => d.value) }],
        }}
        width={screenWidth - 32}
        height={240}
        yAxisLabel="₹"
        fromZero
        showValuesOnTopOfBars
        chartConfig={{
          backgroundColor: '#0f172a',
          backgroundGradientFrom: '#0f172a',
          backgroundGradientTo: '#0f172a',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: () => '#ccc',
          barPercentage: 0.6,
        }}
        style={styles.chart}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#a1a1aa',
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  chartTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  chart: {
    borderRadius: 16,
  },
});
