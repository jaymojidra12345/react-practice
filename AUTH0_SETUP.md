# Auth0 OAuth Integration Setup Guide

This guide will help you set up Auth0 OAuth authentication for your React application.

## Prerequisites

- Auth0 account (sign up at [auth0.com](https://auth0.com))
- Node.js and npm installed
- React application with `@auth0/auth0-react` package (already installed)

## Step 1: Create Auth0 Application

1. **Log in to Auth0 Dashboard**
   - Go to [manage.auth0.com](https://manage.auth0.com)
   - Sign in to your Auth0 account

2. **Create a New Application**
   - Click "Applications" in the sidebar
   - Click "Create Application"
   - Name your application (e.g., "React Auth Practice")
   - Select "Single Page Web Applications"
   - Click "Create"

## Step 2: Configure Application Settings

1. **Basic Information**
   - Note down your `Domain` and `Client ID` from the Settings tab
   - These will be used in your environment variables

2. **Application URIs**
   - **Allowed Callback URLs**: `http://localhost:5173`
   - **Allowed Logout URLs**: `http://localhost:5173`
   - **Allowed Web Origins**: `http://localhost:5173`
   - **Allowed Origins (CORS)**: `http://localhost:5173`

3. **Advanced Settings** (Optional)
   - Under "Grant Types", ensure "Authorization Code" is checked
   - Under "Token Endpoint Authentication Method", select "None"

4. **Save Changes**
   - Click "Save Changes" at the bottom

## Step 3: Configure Environment Variables

1. **Update `.env.local` file** with your Auth0 credentials:
   ```env
   VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
   VITE_AUTH0_CLIENT_ID=your-auth0-client-id
   VITE_AUTH0_AUDIENCE=your-auth0-api-identifier
   ```

2. **Replace the placeholder values**:
   - `your-auth0-domain`: Your Auth0 domain (e.g., `dev-xyz123.us.auth0.com`)
   - `your-auth0-client-id`: Your application's Client ID
   - `your-auth0-api-identifier`: Your API identifier (optional, can be left empty for basic auth)

## Step 4: Test the Integration

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to your application**:
   - Open `http://localhost:5173` in your browser
   - You should see the login page

3. **Test authentication flow**:
   - Click "Log In with Auth0"
   - You'll be redirected to Auth0's login page
   - Sign up or log in with your credentials
   - You'll be redirected back to your application
   - You should see the protected home page with your user information

## Step 5: Customize Authentication (Optional)

### Social Connections
1. In Auth0 Dashboard, go to "Authentication" > "Social"
2. Enable social providers like Google, Facebook, GitHub, etc.
3. Configure each provider with their respective credentials

### Branding
1. Go to "Branding" in the Auth0 Dashboard
2. Customize the login page appearance
3. Upload your logo and set brand colors

### Rules and Hooks
1. Go to "Auth Pipeline" > "Rules"
2. Add custom rules for additional authentication logic
3. Use hooks for more advanced customization

## Troubleshooting

### Common Issues

1. **"Invalid Callback URL" Error**
   - Ensure your callback URL in Auth0 matches your development server URL
   - Check that you're using the correct port (default: 5173 for Vite)

2. **"Access Denied" Error**
   - Verify your Client ID and Domain are correct
   - Check that your application type is set to "Single Page Application"

3. **CORS Errors**
   - Add your development URL to "Allowed Origins (CORS)" in Auth0 settings

4. **Environment Variables Not Loading**
   - Ensure your `.env.local` file is in the project root
   - Restart your development server after changing environment variables
   - Verify variable names start with `VITE_` for Vite projects

### Debug Mode
Add this to your Auth0Provider for debugging:
```tsx
<Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience: audience,
  }}
  cacheLocation="localstorage" // Add this for debugging
>
```

## Security Best Practices

1. **Never commit `.env.local`** to version control
2. **Use different Auth0 applications** for development, staging, and production
3. **Regularly rotate your Client Secret** (if using confidential clients)
4. **Enable MFA** for your Auth0 account
5. **Monitor your Auth0 logs** for suspicious activity

## Production Deployment

When deploying to production:

1. **Update Auth0 Application Settings**:
   - Add your production URLs to all allowed URL fields
   - Update environment variables with production values

2. **Environment Variables**:
   - Set production environment variables in your hosting platform
   - Use the same variable names but with production Auth0 values

3. **Security Headers**:
   - Implement proper CORS policies
   - Use HTTPS in production
   - Set appropriate CSP headers

## Support

- [Auth0 Documentation](https://auth0.com/docs)
- [Auth0 Community](https://community.auth0.com)
- [Auth0 React SDK Documentation](https://auth0.com/docs/libraries/auth0-react)

---

Your React application now has secure OAuth authentication powered by Auth0! 🎉
