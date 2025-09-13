import { useAuth0 } from '@auth0/auth0-react';

const DebugAuth = () => {
  const { isAuthenticated, isLoading, error, user } = useAuth0();
  
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs max-w-sm">
      <h3 className="font-bold mb-2">Auth Debug Info:</h3>
      <div className="space-y-1">
        <p>Domain: {domain || 'NOT SET'}</p>
        <p>Client ID: {clientId ? `${clientId.substring(0, 8)}...` : 'NOT SET'}</p>
        <p>Audience: {audience ? `${audience.substring(0, 8)}...` : 'NOT SET'}</p>
        <p>Is Loading: {isLoading.toString()}</p>
        <p>Is Authenticated: {isAuthenticated.toString()}</p>
        <p>Error: {error?.message || 'None'}</p>
        <p>User: {user ? 'Present' : 'None'}</p>
      </div>
    </div>
  );
};

export default DebugAuth;
