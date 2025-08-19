export const environment = { //constante visivel sistema interiro 
  production: false
}

export const SportifyConfiguration = {
  clientId: '985ca65f21ec48a8bdf9449f2d3e31f8',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  apiTokenEdpoint: 'https://accounts.spotify.com/api/token',
  redirectUrl: 'http://127.0.0.1/login',
  scopes: [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'user-library-read',
    'playlist-read-private',
    'playlist-read-collaborative'
  ]
}
