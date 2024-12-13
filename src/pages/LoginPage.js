import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardLogin from '../components/CardLogin';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <CardLogin onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;