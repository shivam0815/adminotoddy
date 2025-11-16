import { Bell, Plus } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

export default function NotificationsPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Notifications"
        description="Send broadcast messages to drivers and riders."
        icon={<Bell size={20} />}
        actions={
          <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
            <Plus size={14} />
            New Notification
          </button>
        }
      />

      <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Build form here for selecting audience (drivers/riders), city, and
          message content. Below you can show past broadcast history.
        </p>
      </div>
    </div>
  );
}
