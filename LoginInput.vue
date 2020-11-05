<template>
<div class="input-wrapper">
    <div class="label">
        <label :for="name">{{name}}</label>
        <div class="error"> {{error}}</div>
    </div>
    <input :id="name" :type="type" @input="inputEmit">
</div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        rules: {
            type: Object // min, required
        },
        value: {
            type: String,
        },
        type: {
            type: String
        }
    },
    methods: {
        inputEmit(event){
            this.$emit('update', 
            {name: this.name, 
            value: event.target.value,
            valid: this.validate(event.target.value) ? false : true
            }
            )
        },
        validate(value){
            if(this.rules.required && value.length === 0){
                return "Required"
            }

            if(this.rules.min && value.length < this.rules.min){
                return `Minimum length is ${this.rules.min} `
            }
        }
    },
    computed: {
        error(){
            return this.validate(this.value)
        }
    }
}
</script>

<style scoped>
    input {
        background: none;
        color: black;
        border: 1px solid silver;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        margin: 5px;
    }
    .input-wrapper {
        display: flex;
        flex-direction: column; 
    }

    .label {
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;
    }

    label {
        display: flex;
    }

    .error {
        color: red;
    }
</style>