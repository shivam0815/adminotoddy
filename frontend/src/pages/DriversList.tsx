// src/pages/DriversList.tsx
import { useEffect, useState } from 'react';
import { api } from '../api/client';
import DataTable from '../components/DataTable';

type Driver = {
  _id: string;
  name: string;
  phone: string;
  status: string;
  city: string;
  createdAt?: string;   // ✅ Added for Created At column
};

export default function DriversList() {
  const [rows, setRows] = useState<Driver[]>([]);

  useEffect(() => {
    async function load() {
      const { data } = await api.get<Driver[]>('/drivers');
      setRows(data);
    }
    load();
  }, []);

  return (
    <DataTable
      columns={[
        { key: 'name', header: 'Name' },
        { key: 'phone', header: 'Phone' },
        { key: 'status', header: 'Status' },
        { key: 'city', header: 'City' },
        { key: 'createdAt', header: 'Created At' },  // ✅ Added column
      ]}
      data={rows}
    />
  );
}
