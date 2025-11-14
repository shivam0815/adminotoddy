import { useUI } from '../store/ui';
import { useAuth } from '../store/auth';


export default function Topbar(){
const { toggleTheme } = useUI();
const { user, logout } = useAuth();
return (
<header className="h-14 border-b dark:border-gray-800 flex items-center justify-between px-4">
<div className="font-medium">Welcome {user?.name ?? 'Admin'}</div>
<div className="flex items-center gap-3">
<button onClick={toggleTheme} className="px-3 py-1 border rounded">Theme</button>
<button onClick={logout} className="px-3 py-1 border rounded">Logout</button>
</div>
</header>
);
}