import OktaSignIn from '@okta/okta-signin-widget'
import { OktaAuth } from '@okta/okta-auth-js'
const MY_DOMAIN= '';
const MY_CLIENT_ID= ''
const oktaSignIn = new OktaSignIn({
  baseUrl: `https://${MY_DOMAIN}`,
  clientId: MY_CLIENT_ID,
  redirectUri: 'http://localhost:8080/login/callback',
  authParams: {
    pkce: true,
    issuer: `https://${MY_DOMAIN}/oauth2/default`,
    display: 'page',
    scopes: ['openid', 'profile', 'email']
  }
});

const oktaAuth = new OktaAuth({
  issuer: `https://${MY_DOMAIN}/oauth2/default`,
  clientId: MY_CLIENT_ID,
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
})

export { oktaAuth, oktaSignIn };
