import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(4, 'Username must be at least 4 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[0-9]/, 'Password must contain a number')
    .matches(/[a-zA-Z]/, 'Password must contain a letter'),
});

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate with Yup
    try {
      await validationSchema.validate({ username, password }, { abortEarly: false });
      setErrors({}); // Clear errors

      // Existing login logic
      if (username && password) {
        try {
          dispatch(login(username));
          toast.success('Login successful!');
          navigate('/');
        } catch (error) {
          toast.error('Login failed. Please try again.');
        }
      } else {
        toast.warning('Please enter both username and password');
      }
    } catch (validationError: any) {
      // Collect Yup errors
      const fieldErrors: { username?: string; password?: string } = {};
      validationError.inner.forEach((err: any) => {
        if (err.path) fieldErrors[err.path] = err.message;
      });
      setErrors(fieldErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Login</h2>
        <form onSubmit={handleLogin} noValidate>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
              autoComplete="username"
            />
            {errors.username && (
              <div className="text-red-500 text-sm mt-1">{errors.username}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              autoComplete="current-password"
            />
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition-colors duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;  
 
