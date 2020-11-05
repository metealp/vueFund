<template>
    <form @submit="submit" class="form">
        <login-input name="Username"
         :rules="{required: true, min: 5}"
         :value="username.value"
         @update = update
         type="text"
         />

        <login-input name="Password" 
         :rules="{required: true, min: 10}"
         :value="password.value"
         @update = update
         type="password"
         />
        <my-button 
            color="white"
            background="darkslateblue"
            :disabled="!valid"
        />
    </form>
</template>

<script>

import MyButton from "./MyButton.vue"
import LoginInput from "./LoginInput.vue"
export default {
    components: {
        MyButton,
        LoginInput,
        
    },
    methods: {
        update(payload){
            this[payload.name.toLowerCase()] = {
                value: payload.value,
                valid: payload.valid,}
        },
        submit(event){
            event.preventDefault();
            console.log("submit submit")
        }
    },
    data(){
        return {
            username: {value: "", valid: false},
            password: {value: "", valid: false},
            
        }
    },
    computed: {
        valid(){
            return this.username.valid && this.password.valid
        },
    },
}
</script>

<style scoped>
    /* color:red; */
    .form {
        max-width: 400px;
    }
</style>