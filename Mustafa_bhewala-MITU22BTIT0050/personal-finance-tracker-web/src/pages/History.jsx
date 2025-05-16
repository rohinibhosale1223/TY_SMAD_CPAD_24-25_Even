import { useTransactions } from '../context/TransactionContext';
import { CalendarDaysIcon } from 'lucide-react';

export default function History() {
  const { transactions } = useTransactions();

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-6">Transaction History</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-400">No transactions yet.</p>
      ) : (
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between bg-black/20 border border-white/10 backdrop-blur-md p-4 rounded-lg shadow-sm"
            >
              <div>
                <h3 className="text-lg font-medium">{tx.description}</h3>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  <CalendarDaysIcon size={14} className="inline-block" /> {tx.date}
                </p>
              </div>
              <div className="text-right">
                <p
                  className={`text-lg font-semibold ${
                    tx.type === 'income' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  ₹{tx.amount}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    tx.type === 'income'
                      ? 'bg-green-800 text-green-300'
                      : 'bg-red-800 text-red-300'
                  }`}
                >
                  {tx.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
