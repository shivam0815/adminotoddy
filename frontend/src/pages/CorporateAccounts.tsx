import { Building2, Plus } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function CorporateAccountsPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Corporate Accounts"
        description="Manage B2B clients and company ride billing."
        icon={<Building2 size={20} />}
        actions={
          <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
            <Plus size={14} />
            Add Company
          </button>
        }
      />

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Monthly Limit</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3" colSpan={4}>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  No corporate accounts configured.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
