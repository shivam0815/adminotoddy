import { useEffect, useState } from 'react';
import { api } from '../api/client';
import DataTable from '../components/DataTable';

type Customer = {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  createdAt?: string;
};

export default function CustomersList() {
  const [rows, setRows] = useState<Customer[]>([]);

  useEffect(() => {
    async function load() {
      const { data } = await api.get<Customer[]>('/users');
      setRows(data);
    }
    load();
  }, []);

  return (
    <DataTable
      columns={[
        { key: 'name', header: 'Name' },
        { key: 'email', header: 'Email' },
        { key: 'phone', header: 'Phone' },
        { key: 'createdAt', header: 'Created At' },
      ]}
      data={rows}
    />
  );
}
