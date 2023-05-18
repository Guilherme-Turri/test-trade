import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../storage/store';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';


export const ProtectedRoute = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return user?.apiKey ? <Dashboard /> : <Login />;
}