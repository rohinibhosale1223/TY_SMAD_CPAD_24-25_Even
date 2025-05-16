import { useTransactions } from '../context/TransactionContext';
import { ArrowDownCircleIcon, ArrowUpCircleIcon, WalletIcon } from 'lucide-react'; // optional, use any icons

export default function Dashboard() {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-8">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Total Income"
          value={income}
          color="text-green-400"
          icon={<ArrowDownCircleIcon size={28} />}
        />
        <Card
          title="Total Expense"
          value={expense}
          color="text-red-400"
          icon={<ArrowUpCircleIcon size={28} />}
        />
        <Card
          title="Net Balance"
          value={balance}
          color={balance >= 0 ? 'text-blue-400' : 'text-red-400'}
          icon={<WalletIcon size={28} />}
        />
      </div>

      {/* Optional: Progress bar comparing income vs expense */}
      <div className="mt-10">
        <h3 className="mb-2 text-lg font-medium">Spending Ratio</h3>
        <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
          <div
            className="bg-green-400 h-4"
            style={{ width: `${(income / (income + expense)) * 100 || 0}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-400 mt-1">
          {income > 0 ? `${Math.round((income / (income + expense)) * 100)}% income` : 'No income data'}
        </p>
      </div>
    </div>
  );
}

function Card({ title, value, color, icon }) {
  return (
    <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10">
      <div className="flex items-center gap-4 mb-3">
        <div className={`p-2 rounded-full bg-white/10 ${color}`}>{icon}</div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <h3 className={`text-2xl font-bold ${color}`}>₹{value}</h3>
    </div>
  );
}
