import { ref } from "vue"

class AzureService {
    private msalConfig
    private accessToken

    constructor () {
        this.msalConfig = ref({
            auth: {
                clientId: 'XXXXXXX',
                authority: 'XXXXXXX'
            },
            cache: {
                cacheLocation: 'LocalStorage'
            }
        })
        this.accessToken = ref('')
    }

    setAccessToken(token) {
        this.accessToken = token
        return this.accessToken
    }

    getAccessToken () {
        return this.accessToken
    }

    getMsalConfig () {
        return this.msalConfig
    }
}

export default AzureService