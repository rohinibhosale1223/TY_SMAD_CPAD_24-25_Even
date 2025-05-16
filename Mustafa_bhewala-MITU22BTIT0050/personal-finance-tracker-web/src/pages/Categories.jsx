import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTransactions } from '../context/TransactionContext';

export default function Categories() {
  const { transactions } = useTransactions();

  const categoryTotals = transactions.reduce((acc, t) => {
    const key = t.category || 'Uncategorized';
    acc[key] = (acc[key] || 0) + t.amount;
    return acc;
  }, {});

  const data = Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = [
    '#4ade80', '#f87171', '#60a5fa', '#facc15', '#a78bfa', '#fb923c', '#2dd4bf'
  ];

  return (
    <div className="text-white px-6 py-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Category-wise Breakdown</h2>

      <div className="bg-black/20 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10">
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
