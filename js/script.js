const { createApp } = Vue;

createApp ({
    data() {
        return {
            array: [],
        };
    },
    created() {
        this.generateRandomEmail()
    },
    methods: {
        generateRandomEmail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
                    this.array.push(resp.data.response);
                })
            }
            console.log(this.array)
        },
    }
}).mount('#app')