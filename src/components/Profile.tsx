import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <div className="flex items-center space-x-4">
        {user.picture && (
          <img
            src={user.picture}
            alt={user.name || 'User'}
            className="w-16 h-16 rounded-full border-2 border-indigo-200"
          />
        )}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {user.name || 'Unknown User'}
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="text-sm text-gray-500">
          <span className="font-medium">User ID:</span> {user.sub}
        </div>
        {user.email_verified && (
          <div className="flex items-center text-sm text-green-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Email Verified
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
