import { MapPin, Radio, RefreshCw, Search, Car } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function LiveRidesPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Live Rides"
        description="Track all ongoing rides in real-time."
        icon={<Radio size={20} />}
        actions={
          <button className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 dark:border-gray-700">
            <RefreshCw size={14} />
            Auto Refresh
          </button>
        }
      />

      {/* Filters */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            className="h-9 rounded-md border border-gray-300 pl-8 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            placeholder="Search by ride ID, driver, customer..."
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Map placeholder */}
        <div className="md:col-span-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
          <MapPin className="mx-auto mb-2 h-5 w-5" />
          Map integration placeholder. Show live driver locations here.
        </div>

        {/* Summary card */}
        <div className="space-y-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">
                Active rides
              </span>
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                0
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Total ongoing rides on the platform.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Car size={16} />
              <span className="font-medium">No live rides</span>
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Once a ride is accepted and started, it will appear here for
              tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
