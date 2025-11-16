import { Car, Plus } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function VehicleTypesPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Vehicle Types"
        description="Manage categories like Sedan, SUV, Premium, etc."
        icon={<Car size={20} />}
        actions={
          <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
            <Plus size={14} />
            Add Vehicle Type
          </button>
        }
      />

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Base Fare</th>
              <th className="px-4 py-3">Per Km</th>
              <th className="px-4 py-3">Per Min</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3" colSpan={5}>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  No vehicle types configured.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
