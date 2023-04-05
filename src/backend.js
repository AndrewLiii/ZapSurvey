// const {google} = require('googleapis');

// const oauth2Client = new google.auth.OAuth2(
//   '398886978423-2vbt3l61k2ruovqn5723vr8t3tj9g91f.apps.googleusercontent.com',
//   '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',
//   'http://localhost:3000/oauthcallback'
// );

// // generate a url that asks permissions for Blogger and Google Calendar scopes
// const scopes = [
//   'https://www.googleapis.com/auth/drive',
//   'https://www.googleapis.com/auth/drive.readonly',
//   'https://www.googleapis.com/auth/drive.file',
//   'https://www.googleapis.com/auth/spreadsheets',
//   'https://www.googleapis.com/auth/spreadsheets.readonly'
// ];

// const url = oauth2Client.generateAuthUrl({
//   // 'online' (default) or 'offline' (gets refresh_token)
//   access_type: 'offline',

//   // If you only need one scope you can pass it as a string
//   scope: scopes
// });
// console.log(url);
// async function tokenUrl() {
//     const code = new URLSearchParams(url).get('code')
//     const {tokens} = await oauth2Client.getToken(code)
//     oauth2Client.setCredentials(tokens);

//     console.log(tokens);
// }
// tokenUrl()

// const params = new Proxy(new URLSearchParams(window.location.search), {
//     get: (searchParams, prop) => searchParams.get(prop),
//   });
//   // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
//   let value = params.some_key; // "some_value"

// var GoogleTokenProvider = require('refresh-token').GoogleTokenProvider;
 
// var tokenProvider = new GoogleTokenProvider({
//     refresh_token: '1//0gvKSmi5osdCjCgYIARAAGBASNwF-L9IrnQ6wQjnGC4iDh2yaqrAQyhFTjMLDoKZV1wEdCjMds1Jz2telm2ebjwpviInjdrU1IlQ', 
//     client_id:     '398886978423-2vbt3l61k2ruovqn5723vr8t3tj9g91f.apps.googleusercontent.com', 
//     client_secret: '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'
//   });
//   console.log(tokenProvider);
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