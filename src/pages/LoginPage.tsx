import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoginButton from "../components/LoginButton";
import DebugAuth from "../components/DebugAuth";

const LoginPage = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <Helmet>
        <title>Login | React Auth Practice</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Welcome
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Sign in to access your dashboard and manage your account securely.
        </p>
        
        <div className="space-y-4">
          <LoginButton />
          
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Secure authentication powered by Auth0
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-xs text-gray-400 text-center">
            <p>🔐 Your data is protected with enterprise-grade security</p>
            <p>🚀 Single sign-on with multiple providers</p>
            <p>✨ Seamless authentication experience</p>
          </div>
        </div>
      </div>
      <DebugAuth />
    </div>
  );
};

export default LoginPage;
