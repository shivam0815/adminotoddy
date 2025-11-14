// src/pages/Login.tsx
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import { useAuth } from '../store/auth';

export default function Login() {
  const [email, setEmail] = useState('admin@otoddy.com');
  const [password, setPassword] = useState('admin123');
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    try {
      // IMPORTANT: correct path is /auth/login
      const { data } = await api.post('/auth/login', { email, password });

      if (!data?.user) {
        setError('Invalid response from server');
        return;
      }

      setUser(data.user);
      navigate('/');
    } catch (err: any) {
      console.error('LOGIN ERROR:', err);
      setError(err?.response?.data?.message ?? 'Login failed');
    }
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <form onSubmit={submit} className="w-80 border rounded p-4 space-y-3">
        <h1 className="text-xl font-semibold">Admin Login</h1>

        {error && (
          <div className="p-2 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <input
          className="w-full border p-2 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="w-full border p-2 rounded"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="w-full border rounded p-2 bg-black text-white">
          Login
        </button>
      </form>
    </div>
  );
}
