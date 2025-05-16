import { useTransactions } from '../context/TransactionContext';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

export default function Reports() {
  const { transactions } = useTransactions();

  // Group by month-year and calculate income/expense totals
  const monthlyData = transactions.reduce((acc, tx) => {
    const [day, month, year] = tx.date.split('/');
    const key = `${month}-${year}`;

    if (!acc[key]) {
      acc[key] = { month: key, income: 0, expense: 0 };
    }

    if (tx.type === 'income') {
      acc[key].income += tx.amount;
    } else {
      acc[key].expense += tx.amount;
    }

    return acc;
  }, {});

  const chartData = Object.values(monthlyData).sort((a, b) => {
    const [ma, ya] = a.month.split('-').map(Number);
    const [mb, yb] = b.month.split('-').map(Number);
    return ya === yb ? ma - mb : ya - yb;
  });

  return (
    <div className="text-white px-6 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Monthly Income vs Expense</h2>

      {chartData.length === 0 ? (
        <p className="text-gray-400 text-center">No data available.</p>
      ) : (
        <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#4ade80" />
              <Bar dataKey="expense" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
