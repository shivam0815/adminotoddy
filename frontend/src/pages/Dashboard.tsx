// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import StatCard from '../components/StatCard';

type Stats = {
  totalUsers: number;
  totalDrivers: number;
  todayRides: number;
  activeDrivers: number;
};

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalDrivers: 0,
    todayRides: 0,
    activeDrivers: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      const { data } = await api.get<Stats>('/stats');
      setStats(data);
    }
    load();
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard
            label="Total Users"
            value={stats.totalUsers}
            onClick={() => navigate('/customers')}
          />
          <StatCard
            label="Total Drivers"
            value={stats.totalDrivers}
            onClick={() => navigate('/drivers')}
          />
          <StatCard
            label="Today’s Rides"
            value={stats.todayRides}
            onClick={() => navigate('/rides?scope=today')}
          />
          <StatCard
            label="Active Drivers"
            value={stats.activeDrivers}
            onClick={() => navigate('/drivers')}
          />
        </div>
      </div>
    </div>
  );
}
