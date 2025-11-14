import { Outlet, NavLink } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';


export default function AdminLayout() {
return (
<div className="min-h-screen grid grid-cols-[260px_1fr] dark:bg-gray-950">
<Sidebar />
<div className="flex flex-col">
<Topbar />
<main className="p-4"><Outlet /></main>
</div>
</div>
);
}