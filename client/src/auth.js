import { createAuthProvider } from 'react-token-auth';

const authProvider = createAuthProvider({
    accessTokenKey: 'access_token',
    onUpdateToken: (token) => fetch('https://flask-xh9v.onrender.com/auth/refresh', {
        method: 'POST',
        body: token.refresh_token
    }).then(res => res.json())
});

export const useAuth = authProvider.useAuth;
export const authfetch = authProvider.authFetch;
export const login = authProvider.login;
export const logout = authProvider.logout;
