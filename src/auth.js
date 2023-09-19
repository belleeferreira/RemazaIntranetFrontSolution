import { PublicClientApplication } from '@azure/msal-browser'

const msalConfig = {
  auth: {
    clientId: 'a7815b5e-0caa-42a0-a9ef-68f1cd713c7a',
    tenantId: 'f42acaec-b2b8-4cf1-aa36-d6ffdd442618',
    authority: 'https://login.microsoftonline.com/f42acaec-b2b8-4cf1-aa36-d6ffdd442618',
    redirectUri: 'https://intranet.desenvolvimento.empresasremaza.com.br/home', // Replace with your redirect URI
    postLogoutRedirectUri: 'https://intranet.desenvolvimento.empresasremaza.com.br/home'
  }
}
const baseURL = window.location.origin

if (baseURL.includes('localhost')) {
  msalConfig.auth.redirectUri = 'http://localhost:9000/home'
} else if (baseURL.includes('desenvolvimento')) {
  msalConfig.auth.redirectUri = 'https://intranet.desenvolvimento.empresasremaza.com.br/home'
} else if (baseURL.includes('homologacao')) {
  msalConfig.auth.redirectUri = 'https://intranet.homologacao.empresasremaza.com.br/'
  msalConfig.auth.postLogoutRedirectUri = 'https://intranet.homologacao.empresasremaza.com.br/'
} else {
  msalConfig.auth.redirectUri = 'https://intranet.desenvolvimento.empresasremaza.com.br/home'
}

const msalInstance = new PublicClientApplication(msalConfig)

msalInstance.handleRedirectPromise().then((response) => {
  if (response !== null) { // Faça algo com a resposta (por exemplo, atualize o estado do usuário)
    console.log(response, 'resposta')
  }
}).catch((error) => { console.error(error) })

export default msalInstance
