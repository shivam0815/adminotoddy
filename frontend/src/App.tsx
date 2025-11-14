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
import type React from 'react';

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
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="drivers" element={<DriversList />} />
            <Route path="rides" element={<RidesList />} />
            <Route path="customers" element={<CustomersList />} />
            <Route path="payouts" element={<Payouts />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
