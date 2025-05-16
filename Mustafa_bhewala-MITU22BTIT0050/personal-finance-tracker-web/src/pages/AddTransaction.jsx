import { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';

export default function AddTransaction() {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('General');

  const { addTransaction } = useTransactions();

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-black/20 backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md border border-white/10"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add Transaction</h2>

        <label className="block mb-2 text-sm font-medium">Description</label>
        <input
          type="text"
          placeholder="e.g. Salary, Grocery"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="block mb-2 text-sm font-medium">Amount</label>
        <input
          type="number"
          placeholder="e.g. 5000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="block mb-2 text-sm font-medium">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <label className="block mb-2 text-sm font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 mb-6 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option>General</option>
          <option>Salary</option>
          <option>Food</option>
          <option>Rent</option>
          <option>Transport</option>
          <option>Entertainment</option>
          <option>Healthcare</option>
          <option>Shopping</option>
        </select>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
