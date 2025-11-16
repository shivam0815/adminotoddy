import { Wallet, Download } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function DriverPayoutsPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Driver Payouts"
        description="Track and manage payouts to drivers."
        icon={<Wallet size={20} />}
        actions={
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900">
            <Download size={14} />
            Export CSV
          </button>
        }
      />

      <div className="grid gap-4 md:grid-cols-3 mb-4">
        <div className="rounded-lg border bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Pending payouts
          </div>
          <div className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
            ₹0
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Processed this week
          </div>
          <div className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
            ₹0
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Failed payouts
          </div>
          <div className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
            0
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Driver</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Period</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3" colSpan={5}>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  No payout records yet.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
