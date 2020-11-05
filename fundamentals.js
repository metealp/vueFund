import {createApp} from "vue/dist/vue.esm-browser.js"

const Hello = {
    template: `<h3>Hello from component</h3>`
}

const childToParent = {
    props: {
        number: {
            type: Number,
            required: true
        }
    },
    methods: {
        emitBtn(){
            this.$emit("chosen", {number: this.number })
        }
    },
    template: `<button @click="emitBtn" >{{ number }}</button>`

}

const Prop = {
    props: {
        number: {
            type: Number,
            required: true
        }
    },
    template: `<h3>{{ number }}</h3>`
}
const app = createApp({
    components: {
        Hello,
        Prop,
        childToParent,
    },     
    template: `
    <Hello />

    <childToParent v-for="num in numbers" v-bind:number="num" @chosen="putInArray"/>

    <div>
        <childToParent v-for="num in clickedNumbers" v-bind:number="num" @chosen="putInArray"/>
    </div>
    
    <Prop v-bind:number="count" />
    <button v-on:click="increment()"> Increment</button>
    <p> {{ count }} </p>
    <div v-if="isEven(count)">
        Even
    </div>
    <div v-else>
        Odd
    </div>

    <div  v-for="num in numbers">
        <div :class="getClass(num)" :title="num">     
            {{ num }}
        </div>
    </div>

    <input @input="input" v-bind:value="inputVal"/>
    <div v-if="error.length >= 0"> {{ error }} </div>

    <input type="checkbox" v-model="chBox" value="a"/> <input type="checkbox" v-model="chBox" value="b"/> {{ chBox }}
    <div></div>
    <input type="radio" v-model="radioBtns" value="true"/> <input type="radio" v-model="radioBtns" value="false"/>  {{ radioBtns }}

    `,
    computed: {
        evenList(){
            return this.numbers.filter( num => {this.isEven(num)})
        },
        error(){
            if(this.inputVal.length < 7) {
                return "Too short"
            }
        },
    },
    data(){
        return {
            msg: "world",
            person: {
                name: "Mete",
                age: 28
            },
            count: 0,
            numbers: [0,1,2,3,4,5,6,7,8],
            inputVal: "",
            chBox: ["a"],
            radioBtns: false,
            clickedNumbers: []
            
        }
    },
    methods: {
        increment(){
            this.count += 1
        },
        isEven(num){
            return num % 2 === 0
        },
        getClass(num){
            if(this.isEven(num)){
                return "redColor"
            } else {
                return "blueColor"
            }
        },
        input(event){
            this.inputVal= event.target.value
        },
        putInArray(payload){
            this.clickedNumbers.push(payload.number)
            console.log(this.clickedNumbers)
        }
    }
}).mount("#app")