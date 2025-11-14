// src/pages/RidesList.tsx
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../api/client';
import DataTable from '../components/DataTable';

type RideRow = {
  _id: string;
  userName: string;
  userPhone: string;
  driverName: string;
  status: string;
  fare: number;
  createdAt?: string;
};

export default function RidesList() {
  const [rows, setRows] = useState<RideRow[]>([]);
  const [params] = useSearchParams();

  useEffect(() => {
    async function load() {
      const scope = params.get('scope');
      const url = scope === 'today' ? '/rides?scope=today' : '/rides';

      const { data } = await api.get<RideRow[]>(url);
      setRows(data);
    }
    load();
  }, [params]);

  return (
    <DataTable
      columns={[
        { key: 'userName', header: 'User' },
        { key: 'userPhone', header: 'User Phone' },
        { key: 'driverName', header: 'Driver' },
        { key: 'status', header: 'Status' },
        { key: 'fare', header: 'Fare' },
        { key: 'createdAt', header: 'Created At' },
      ]}
      data={rows}
    />
  );
}
