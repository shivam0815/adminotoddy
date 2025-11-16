import { Receipt, Search, Filter } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function TransactionsPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Transactions"
        description="Complete ledger of all ride and wallet transactions."
        icon={<Receipt size={20} />}
      />

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            className="h-9 rounded-md border border-gray-300 pl-8 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            placeholder="Search by transaction ID, ride, user..."
          />
        </div>
        <button className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900">
          <Filter size={14} />
          Filters
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Txn ID</th>
              <th className="px-4 py-3">Ride ID</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Mode</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3" colSpan={7}>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  No transactions found. Connect to your backend API here.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
