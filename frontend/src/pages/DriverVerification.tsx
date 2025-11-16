import { Filter, RefreshCw, Search, UserCheck } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function DriverVerificationPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Driver Verification"
        description="Review and approve new driver signups and KYC documents."
        icon={<UserCheck size={20} />}
        actions={
          <button className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 dark:border-gray-700">
            <RefreshCw size={14} />
            Refresh
          </button>
        }
      />

      {/* Filters */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            className="h-9 rounded-md border border-gray-300 pl-8 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            placeholder="Search driver name, phone, ID..."
          />
        </div>
        <button className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900">
          <Filter size={14} />
          Filters
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Driver</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Docs</th>
              <th className="px-4 py-3">Submitted At</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {/* Replace with real data map */}
            <tr>
              <td className="px-4 py-3">
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  No pending drivers
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  New applications will appear here.
                </div>
              </td>
              <td className="px-4 py-3" colSpan={4}></td>
              <td className="px-4 py-3 text-right"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
