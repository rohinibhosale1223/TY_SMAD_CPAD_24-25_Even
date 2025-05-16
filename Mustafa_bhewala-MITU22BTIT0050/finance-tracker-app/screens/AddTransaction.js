import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTransactions } from '../context/TransactionContext';

export default function AddTransaction({ navigation }) {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('General');
  const { addTransaction } = useTransactions();

  const handleSubmit = () => {
    if (!desc || !amount) return;

    addTransaction({
      id: Date.now(),
      description: desc,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toLocaleDateString(),
    });

    setDesc('');
    setAmount('');
    setCategory('General');
    navigation.navigate('Dashboard');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Add Transaction</Text>

        <TextInput
          placeholder="Description"
          placeholderTextColor="#ccc"
          value={desc}
          onChangeText={setDesc}
          style={styles.input}
        />

        <TextInput
          placeholder="Amount"
          placeholderTextColor="#ccc"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.label}>Type</Text>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
          style={styles.picker}
          itemStyle={{ color: '#fff' }}
        >
          <Picker.Item label="Income" value="income" />
          <Picker.Item label="Expense" value="expense" />
        </Picker>

        <Text style={styles.label}>Category</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
          itemStyle={{ color: '#fff' }}
        >
          <Picker.Item label="General" value="General" />
          <Picker.Item label="Salary" value="Salary" />
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Transport" value="Transport" />
          <Picker.Item label="Rent" value="Rent" />
          <Picker.Item label="Shopping" value="Shopping" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Transaction</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f172a',
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: 14,
    borderRadius: 8,
    marginBottom: 15,
  },
  label: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
  },
  picker: {
    backgroundColor: '#1e293b',
    color: '#fff',
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#22c55e',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
