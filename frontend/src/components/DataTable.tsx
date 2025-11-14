// src/components/DataTable.tsx
import React from 'react';

export type Col<T> = {
  key: keyof T;
  header: string;
};

type Props<T extends { _id?: string }> = {
  columns: Col<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
};

function DataTable<T extends { _id?: string }>({
  columns,
  data,
  onRowClick,
}: Props<T>) {
  return (
    <div className="border rounded overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            {columns.map(col => (
              <th
                key={String(col.key)}
                className="text-left text-sm font-semibold px-4 py-2 border-b"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-4 text-sm text-gray-500 text-center"
              >
                No data
              </td>
            </tr>
          )}

          {data.map(row => (
            <tr
              key={row._id ?? JSON.stringify(row)}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={onRowClick ? () => onRowClick(row) : undefined}
            >
              {columns.map(col => (
                <td
                  key={String(col.key)}
                  className="px-4 py-2 text-sm border-b"
                >
                  {String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
