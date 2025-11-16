import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Users,
  Car,
  Receipt,
  Settings,
  Home,
  Wallet,
  HelpCircle,
  Bell,
  MapPin,
  FileText,
  ChevronDown,
  ChevronRight,
  Gauge,
  Percent,
  Building2,
  CreditCard,
} from 'lucide-react';

const baseLink =
  'flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors';
const activeLink =
  'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-300 font-semibold';
const inactiveLink =
  'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800';

type Section = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  links: {
    to: string;
    label: string;
    icon: React.ReactNode;
  }[];
};

const sections: Section[] = [
  {
    id: 'overview',
    title: 'Overview',
    icon: <Gauge size={16} />,
    links: [
      { to: '/', label: 'Dashboard', icon: <Home size={16} /> },
    ],
  },
  {
    id: 'operations',
    title: 'Operations',
    icon: <Car size={16} />,
    links: [
      { to: '/drivers', label: 'All Drivers', icon: <Users size={16} /> },
      {
        to: '/drivers/verification',
        label: 'Driver Verification',
        icon: <FileText size={16} />,
      },
      {
        to: '/rides',
        label: 'All Rides',
        icon: <Car size={16} />,
      },
      {
        to: '/rides/live',
        label: 'Live Rides',
        icon: <MapPin size={16} />,
      },
      {
        to: '/rides/cancelled',
        label: 'Cancelled Rides',
        icon: <Receipt size={16} />,
      },
      {
        to: '/customers',
        label: 'Customers',
        icon: <Users size={16} />,
      },
    ],
  },
  {
    id: 'finance',
    title: 'Finance',
    icon: <Wallet size={16} />,
    links: [
      {
        to: '/finance/transactions',
        label: 'Transactions',
        icon: <Receipt size={16} />,
      },
      {
        to: '/payouts',
        label: 'Driver Payouts',
        icon: <Wallet size={16} />,
      },
      {
        to: '/finance/refunds',
        label: 'Refund Requests',
        icon: <CreditCard size={16} />,
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Fleet',
    icon: <Percent size={16} />,
    links: [
      {
        to: '/pricing/surge',
        label: 'Surge Pricing',
        icon: <Percent size={16} />,
      },
      {
        to: '/pricing/coupons',
        label: 'Promo Codes',
        icon: <TicketIcon />,
      },
      {
        to: '/fleet/vehicles',
        label: 'Vehicle Types',
        icon: <Car size={16} />,
      },
    ],
  },
  {
    id: 'support',
    title: 'Support',
    icon: <HelpCircle size={16} />,
    links: [
      {
        to: '/tickets',
        label: 'Support Tickets',
        icon: <HelpCircle size={16} />,
      },
      {
        to: '/notifications',
        label: 'Notifications',
        icon: <Bell size={16} />,
      },
      {
        to: '/help-center',
        label: 'Help Center',
        icon: <FileText size={16} />,
      },
    ],
  },
  {
    id: 'admin',
    title: 'Admin & Config',
    icon: <Settings size={16} />,
    links: [
      {
        to: '/companies',
        label: 'Corporate Accounts',
        icon: <Building2 size={16} />,
      },
      {
        to: '/settings',
        label: 'App Settings',
        icon: <Settings size={16} />,
      },
      {
        to: '/settings/logs',
        label: 'Activity Logs',
        icon: <FileText size={16} />,
      },
    ],
  },
];

// Simple ticket icon using lucide paths
function TicketIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9V5a2 2 0 0 1 2-2h6" />
      <path d="M3 15v4a2 2 0 0 0 2 2h6" />
      <path d="M21 9V5a2 2 0 0 0-2-2h-6" />
      <path d="M21 15v4a2 2 0 0 1-2 2h-6" />
      <path d="M7 9h10" />
      <path d="M7 15h10" />
    </svg>
  );
}

export default function Sidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    overview: true,
    operations: true,
    finance: false,
    pricing: false,
    support: false,
    admin: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="h-screen w-64 border-r dark:border-gray-800 p-3 flex flex-col bg-white dark:bg-gray-950">
      <div className="px-4 py-3 text-lg font-semibold tracking-tight border-b border-gray-100 dark:border-gray-800 mb-2">
        <span className="text-blue-600 dark:text-blue-400">Otoddy</span>{' '}
        Admin
      </div>

      <nav className="space-y-2 overflow-y-auto text-sm">
        {sections.map(section => (
          <div key={section.id}>
            <button
              type="button"
              onClick={() => toggleSection(section.id)}
              className="w-full px-3 py-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <span className="flex items-center gap-2">
                {section.icon}
                {section.title}
              </span>
              {openSections[section.id] ? (
                <ChevronDown size={14} />
              ) : (
                <ChevronRight size={14} />
              )}
            </button>

            {openSections[section.id] && (
              <div className="mt-1 space-y-1">
                {section.links.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      [
                        baseLink,
                        isActive ? activeLink : inactiveLink,
                        'ml-3',
                      ].join(' ')
                    }
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
