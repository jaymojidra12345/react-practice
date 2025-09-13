# Troubleshooting Auth0 Login Issues

## Current Issue: Login Redirect Loop

If clicking "Log In" redirects back to the login page, follow these steps:

### Step 1: Check Auth0 Application Configuration

1. **Go to Auth0 Dashboard** → Applications → Your App
2. **Verify Application Type**: Must be "Single Page Application"
3. **Check Application URIs**:
   ```
   Allowed Callback URLs: http://localhost:5173
   Allowed Logout URLs: http://localhost:5173
   Allowed Web Origins: http://localhost:5173
   Allowed Origins (CORS): http://localhost:5173
   ```

### Step 2: Verify Environment Variables

Check that your `.env.local` file has:
```env
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
```

**Important**: Remove or comment out `VITE_AUTH0_AUDIENCE` unless you have a custom API configured.

### Step 3: Check Browser Console

1. Open browser developer tools (F12)
2. Look for errors in the Console tab
3. Check the Network tab for failed requests

### Step 4: Clear Browser Cache

1. Clear browser cache and cookies
2. Try in incognito/private mode
3. Restart the development server

### Common Solutions

1. **Wrong Application Type**: Change to "Single Page Application" in Auth0
2. **Missing Callback URLs**: Add `http://localhost:5173` to all URL fields
3. **Audience Issues**: Remove audience parameter if not using custom API
4. **Cache Issues**: Clear browser cache and restart dev server

### Debug Information

The login page now shows debug info in the bottom-right corner with:
- Domain and Client ID status
- Authentication state
- Any errors

Use this information to identify the specific issue.
