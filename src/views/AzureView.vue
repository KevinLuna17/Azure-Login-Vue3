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
        mounted () {
            const azureService = new AzureService()
            this.$msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
            console.log(this.$msalInstance);
        },
        methods: {
            login() {
                this.$msalInstance
                .loginPopup({})
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