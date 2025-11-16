import { FileText } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function HelpCenterPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Help Center"
        description="Manage FAQs and support articles for the apps."
        icon={<FileText size={20} />}
      />

      <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <p className="text-sm text-gray-600 dark:text-gray-200 mb-3">
          Create categories like “Rider FAQs”, “Driver FAQs”, “Payments” etc.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Hook this page with your backend to store help articles and sync them
          to the app.
        </p>
      </div>
    </div>
  );
}
