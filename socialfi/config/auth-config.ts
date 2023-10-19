export const CLIENT_ID = '877864924022-hsa94fpk6d2qpif2e22idb6ap06m1l2l.apps.googleusercontent.com';  
export const REDIRECT_URL = 'http://localhost:3000/';


export function constructLoginURL(nonce: string): string {
    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URL,
        response_type: 'id_token',
        scope: 'openid',
        nonce: nonce,
    });
    const loginURL = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
    return loginURL;
}

//https://accounts
