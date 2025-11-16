import { FileText } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function ActivityLogsPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Activity Logs"
        description="Audit trail of admin actions in the dashboard."
        icon={<FileText size={20} />}
      />

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Admin</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3" colSpan={4}>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  No activity logs yet. Connect this to your backend audit
                  system.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
