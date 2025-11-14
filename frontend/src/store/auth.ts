import { create } from 'zustand';


type Role = 'SUPERADMIN' | 'ADMIN' | 'OPS' | 'FINANCE' | 'SUPPORT';


interface AuthState {
token?: string; // optional if you store only in cookie
user?: { id: string; name: string; role: Role } | null;
setUser: (u: AuthState['user']) => void;
logout: () => void;
}


export const useAuth = create<AuthState>((set) => ({
token: undefined,
user: null,
setUser: (user) => set({ user }),
logout: () => {
set({ user: null, token: undefined });
window.location.href = '/login';
}
}));