type StatCardProps = {
  label: string;
  value: number | string;
  onClick?: () => void;
};

export default function StatCard({ label, value, onClick }: StatCardProps) {
  const clickable = !!onClick;

  return (
    <div
      onClick={onClick}
      className={
        'border rounded p-4 bg-white flex flex-col gap-1 ' +
        (clickable ? 'cursor-pointer hover:bg-gray-50 transition-colors' : '')
      }
    >
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-2xl font-semibold">{value}</span>
    </div>
  );
}
