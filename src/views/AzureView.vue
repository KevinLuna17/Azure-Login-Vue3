<template>
    <h1>Azure login</h1>
    <button @click="login">Login</button>
</template>

<script>
    import { PublicClientApplication } from '@azure/msal-browser'
    import { defineComponent } from 'vue'
    import AzureService from '@/services/AzureService'

    export default defineComponent ({
        name: 'AzureView',
        data() {
            return {
                account: ''
            }
        },
        async created () {
            const azureService = new AzureService()
            this.$msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
            this.$msalInstance.initialize()
        },
        methods: {
            async login() {
                await this.$msalInstance
                .loginRedirect()
                .then(() => {
                    const myAccounts = this.$msalInstance.getAllAccounts()
                    this.account = myAccounts [0]
                    this.$emitter.emit('login', this.account)
                })
                .catch(error => {
                    alert(error)
                })
            }
        }
    })
</script>