import { Percent, MapPin } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function SurgePricingPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Surge Pricing"
        description="Configure time and area-based surge multipliers."
        icon={<Percent size={20} />}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h2 className="mb-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
            Time-based surge
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            Configure surge multipliers for peak hours.
          </p>
          {/* Replace with real form */}
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Add form here for peak hour slots.
          </div>
        </div>

        <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
          <MapPin className="mx-auto mb-2 h-5 w-5" />
          Map placeholder for zone-based surge. Integrate maps later.
        </div>
      </div>
    </div>
  );
}
