# okta-app
## Pre-requirement

* Okta account
* App created/registered in Okta
* Users available in Okta to login
* The App configured with the correct Rules for challenging the login with 2FA

This project uses the following additional dependencies which are not defined in the Okta Example:
* core-js
* vue-router

Once you have registered (free 30 day trial) with Okta, you can go to the file src/okta/index.js and replace the value MY_DOMAIN with the domain assigned to you and MY_CLIENT_ID with the clientId of the App you have registered in Okta.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
