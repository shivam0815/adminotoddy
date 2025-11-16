import { Settings } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function AppSettingsPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="App Settings"
        description="Global configuration for the Otoddy platform."
        icon={<Settings size={20} />}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h2 className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
            General
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            App name, support email, default city, etc. Add form fields here.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h2 className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
            Payments
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Razorpay/PhonePe keys, settlement preferences, taxation, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
