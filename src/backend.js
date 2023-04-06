const TokenProvider = require('refresh-token');

const tokenProvider = new TokenProvider('https://accounts.google.com/o/oauth2/token', {
    refresh_token: '1//0gvKSmi5osdCjCgYIARAAGBASNwF-L9IrnQ6wQjnGC4iDh2yaqrAQyhFTjMLDoKZV1wEdCjMds1Jz2telm2ebjwpviInjdrU1IlQ', 
    client_id:     '398886978423-2vbt3l61k2ruovqn5723vr8t3tj9g91f.apps.googleusercontent.com', 
    client_secret: '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'
    /* you can pass an access token optionally
    access_token:  'fdlaksd',
    expires_in:    2133
    */
});

let tokenURL = ''

tokenProvider.getToken(function (err, token) {
    if (err) {
        console.error(err);
    } else {
        tokenURL = token
        console.log(tokenURL)
    }
});
console.log(tokenURL);

export {tokenURL}