import { NavLink } from 'react-router-dom';
import { Users, Car, Receipt, Settings, Home, Wallet, HelpCircle } from 'lucide-react';


const link = 'flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800';


export default function Sidebar() {
return (
<aside className="h-screen border-r dark:border-gray-800 p-3">
<div className="px-4 py-3 text-xl font-semibold">Otoddy Admin</div>
<nav className="space-y-1">
<NavLink className={link} to="/"><Home size={18}/>Dashboard</NavLink>
<NavLink className={link} to="/drivers"><Users size={18}/>Drivers</NavLink>
<NavLink className={link} to="/rides"><Car size={18}/>Rides</NavLink>
<NavLink className={link} to="/customers"><Users size={18}/>Customers</NavLink>
<NavLink className={link} to="/payouts"><Wallet size={18}/>Payouts</NavLink>
<NavLink className={link} to="/tickets"><HelpCircle size={18}/>Tickets</NavLink>
<NavLink className={link} to="/settings"><Settings size={18}/>Settings</NavLink>
</nav>
</aside>
);
}