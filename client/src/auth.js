import {createAuthProvider} from 'react-token-auth'

export const [useAuth,authfetch,login,logout] =
createAuthProvider({
    accessTokenkey:'access_token',
    onUpdateToken:(token) =>fetch('/auth/refresh',{
        method:'POST',
        body:token.refresh_token
    })
    .then(res => res.json())
})
    
