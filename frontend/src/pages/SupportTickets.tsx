import { HelpCircle, Filter } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function SupportTicketsPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Support Tickets"
        description="Handle issues raised by drivers and customers."
        icon={<HelpCircle size={20} />}
      />

      <div className="mb-4 flex gap-3">
        <button className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900">
          <Filter size={14} />
          Status
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Ticket ID</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3" colSpan={5}>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  No tickets yet.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
