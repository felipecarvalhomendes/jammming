const client_id ='877d0200b7be450cadf26de2389e4cc4';
const redirect_uri = 'http://localhost:3000/';
let accessToken;

const Spotify = {
    const getAccessToken = () => {
        if (accessToken) { 
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access token', null, '/');

            return accessToken;
        } else { 
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }

    },
};

export default Spotify;