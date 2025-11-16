import type React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AdminLayout from './layouts/AdminLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DriversList from './pages/DriversList';
import RidesList from './pages/RidesList';
import CustomersList from './pages/CustomersList';
import Payouts from './pages/Payouts';
import Tickets from './pages/Tickets';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import { useAuth } from './store/auth';

// NEW PAGES
import DriverVerification from './pages/DriverVerification';
import LiveRides from './pages/LiveRides';
import CancelledRides from './pages/CancelledRides';
import Transactions from './pages/Transactions';
import RefundRequests from './pages/RefundRequests';
import SurgePricing from './pages/SurgePricing';
import PromoCodes from './pages/PromoCodes';
import VehicleTypes from './pages/VehicleTypes';
import Notifications from './pages/Notifications';
import HelpCenter from './pages/HelpCenter';
import CorporateAccounts from './pages/CorporateAccounts';
import ActivityLogs from './pages/ActivityLogs';

const qc = new QueryClient();

function PrivateRoute({ children }: { children: React.ReactElement }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <QueryClientProvider client={qc}>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/login" element={<Login />} />

          {/* Protected admin layout */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            {/* Dashboard */}
            <Route index element={<Dashboard />} />

            {/* Drivers */}
            <Route path="drivers" element={<DriversList />} />
            <Route path="drivers/verification" element={<DriverVerification />} />

            {/* Rides */}
            <Route path="rides" element={<RidesList />} />
            <Route path="rides/live" element={<LiveRides />} />
            <Route path="rides/cancelled" element={<CancelledRides />} />

            {/* Customers */}
            <Route path="customers" element={<CustomersList />} />

            {/* Finance */}
            <Route path="payouts" element={<Payouts />} />
            <Route path="finance/transactions" element={<Transactions />} />
            <Route path="finance/refunds" element={<RefundRequests />} />

            {/* Pricing & Fleet */}
            <Route path="pricing/surge" element={<SurgePricing />} />
            <Route path="pricing/coupons" element={<PromoCodes />} />
            <Route path="fleet/vehicles" element={<VehicleTypes />} />

            {/* Support */}
            <Route path="tickets" element={<Tickets />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="help-center" element={<HelpCenter />} />

            {/* Admin & Config */}
            <Route path="companies" element={<CorporateAccounts />} />
            <Route path="settings" element={<Settings />} />
            <Route path="settings/logs" element={<ActivityLogs />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
